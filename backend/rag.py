import os

from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import FastEmbedEmbeddings
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate


# Load environment variables
load_dotenv()


# --------------------------------------------------
# FILE PATHS
# --------------------------------------------------

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

PDF_PATH = os.path.join(
    BASE_DIR,
    "data",
    "GRD_Edge_College_Knowledge_Base.pdf"
)

VECTORSTORE_PATH = os.path.join(
    BASE_DIR,
    "vectorstore"
)


# --------------------------------------------------
# CHECK PDF
# --------------------------------------------------

print("PDF PATH:", PDF_PATH)

if not os.path.isfile(PDF_PATH):
    raise FileNotFoundError(
        f"College knowledge base PDF not found: {PDF_PATH}"
    )


# --------------------------------------------------
# LOAD PDF
# --------------------------------------------------

print("Loading college knowledge base...")

loader = PyPDFLoader(PDF_PATH)

documents = loader.load()

print(f"Loaded {len(documents)} PDF pages.")


# --------------------------------------------------
# SPLIT PDF INTO CHUNKS
# --------------------------------------------------

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)

chunks = text_splitter.split_documents(documents)

print(f"Created {len(chunks)} text chunks.")


# --------------------------------------------------
# CREATE EMBEDDINGS
# --------------------------------------------------

print("Loading embedding model...")

embeddings = FastEmbedEmbeddings(
    model_name="BAAI/bge-small-en-v1.5"
)


# --------------------------------------------------
# CREATE OR LOAD FAISS VECTOR DATABASE
# --------------------------------------------------

index_file = os.path.join(
    VECTORSTORE_PATH,
    "index.faiss"
)


if os.path.exists(index_file):

    print("Loading existing FAISS vector database...")

    vectorstore = FAISS.load_local(
        VECTORSTORE_PATH,
        embeddings,
        allow_dangerous_deserialization=True
    )

else:

    print("Creating FAISS vector database...")

    os.makedirs(
        VECTORSTORE_PATH,
        exist_ok=True
    )

    vectorstore = FAISS.from_documents(
        chunks,
        embeddings
    )

    vectorstore.save_local(
        VECTORSTORE_PATH
    )

    print("FAISS vector database created successfully.")


# --------------------------------------------------
# RETRIEVER
# --------------------------------------------------

retriever = vectorstore.as_retriever(
    search_kwargs={
        "k": 5
    }
)


# --------------------------------------------------
# GROQ LLM
# --------------------------------------------------

llm = ChatGroq(
    model="openai/gpt-oss-120b",
    temperature=0
)


# --------------------------------------------------
# RAG PROMPT
# --------------------------------------------------

rag_prompt = ChatPromptTemplate.from_template(
    """
You are GRD Edge, the AI-powered college assistant for
Dr. G.R. Damodaran College of Science, Coimbatore.

Answer the user's question using ONLY the context provided below.

If the answer is not available in the context, say:

"I couldn't find that information in my college knowledge base."

Do not make up information.

Context:
{context}

Question:
{question}

Answer:
"""
)


# --------------------------------------------------
# GRD EDGE RAG FUNCTION
# --------------------------------------------------

def ask_grd_edge(question: str) -> str:

    print("Question received:", question)

    retrieved_docs = retriever.invoke(question)

    print(f"Retrieved {len(retrieved_docs)} documents.")

    context = "\n\n".join(
        doc.page_content
        for doc in retrieved_docs
    )

    prompt = rag_prompt.invoke(
        {
            "context": context,
            "question": question
        }
    )

    print("Sending request to Groq...")

    response = llm.invoke(prompt)

    print("Groq response received.")

    if isinstance(response.content, list):

        return "\n".join(
            item.get("text", "")
            for item in response.content
            if isinstance(item, dict)
            and item.get("type") == "text"
        )

    return response.content