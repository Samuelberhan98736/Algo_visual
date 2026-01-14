"""FastAPI entrypoint for the algorithm visualizer backend."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.arrays import router as arrays_router
from api.runs import router as runs_router
from core.storage import init_db

app = FastAPI(title="Algo Visualizer API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/")
def root() -> dict:
    return {"status": "ok"}


app.include_router(arrays_router, prefix="/arrays", tags=["arrays"])
app.include_router(runs_router, prefix="/runs", tags=["runs"])
