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


# File paths
PDF_PATH = "data/GRD_Edge_College_Knowledge_Base.pdf"
VECTORSTORE_PATH = "vectorstore"


# Load PDF
loader = PyPDFLoader(PDF_PATH)
documents = loader.load()


# Split PDF into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)

chunks = text_splitter.split_documents(documents)


# Create lightweight embeddings
embeddings = FastEmbedEmbeddings(
    model_name="BAAI/bge-small-en-v1.5"
)


# Create or load FAISS vector database
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

    vectorstore = FAISS.from_documents(
        chunks,
        embeddings
    )

    os.makedirs(
        VECTORSTORE_PATH,
        exist_ok=True
    )

    vectorstore.save_local(
        VECTORSTORE_PATH
    )

    print("FAISS vector database created successfully.")


# Create retriever
retriever = vectorstore.as_retriever(
    search_kwargs={
        "k": 5
    }
)


# Groq model
llm = ChatGroq(
    model="openai/gpt-oss-120b",
    temperature=0
)


# RAG prompt
rag_prompt = ChatPromptTemplate.from_template("""
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
""")


# GRD Edge RAG function
def ask_grd_edge(question: str) -> str:

    retrieved_docs = retriever.invoke(question)

    context = "\n\n".join(
        doc.page_content
        for doc in retrieved_docs
    )

    prompt = rag_prompt.invoke({
        "context": context,
        "question": question
    })

    response = llm.invoke(prompt)

    if isinstance(response.content, list):

        return "\n".join(
            item.get("text", "")
            for item in response.content
            if isinstance(item, dict)
            and item.get("type") == "text"
        )

    return response.content