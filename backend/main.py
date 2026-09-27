from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

def ask_grd_edge(message):
    from backend.rag import ask_grd_edge as rag_ask
    return rag_ask(message)


app = FastAPI(
    title="GRD Edge API",
    description="AI-Powered College Assistance Agent",
    version="1.0.0"
)


# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
allow_credentials=False,
allow_methods=["*"],
allow_headers=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    return {
        "app": "GRD Edge API",
        "status": "online"
    }


@app.post("/chat")
def chat(request: ChatRequest):
    answer = ask_grd_edge(request.message)

    return {
        "answer": answer
    }