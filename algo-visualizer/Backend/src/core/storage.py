import json
import sqlite3
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional


BASE_DIR = Path(__file__).resolve().parents[1]
DB_PATH = BASE_DIR / "data" / "runs.db"


def _connect() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    return connection


def init_db() -> None:
    with _connect() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS runs (
                id TEXT PRIMARY KEY,
                algorithm TEXT NOT NULL,
                input_json TEXT NOT NULL,
                output_json TEXT,
                steps_json TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        connection.execute(
            "CREATE INDEX IF NOT EXISTS idx_runs_created_at ON runs(created_at)"
        )
        connection.commit()


def insert_run(
    algorithm: str,
    input_payload: Dict[str, Any],
    steps: List[Dict[str, Any]],
    output_payload: Optional[Dict[str, Any]] = None
) -> Dict[str, Any]:
    run_id = str(uuid.uuid4())
    created_at = datetime.now(timezone.utc).isoformat()

    with _connect() as connection:
        connection.execute(
            """
            INSERT INTO runs (id, algorithm, input_json, output_json, steps_json, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (
                run_id,
                algorithm,
                json.dumps(input_payload),
                json.dumps(output_payload) if output_payload is not None else None,
                json.dumps(steps),
                created_at,
            )
        )
        connection.commit()

    return {
        "id": run_id,
        "algorithm": algorithm,
        "input": input_payload,
        "output": output_payload,
        "steps": steps,
        "created_at": created_at,
    }


def list_runs(limit: int = 50, offset: int = 0) -> List[Dict[str, Any]]:
    with _connect() as connection:
        rows = connection.execute(
            """
            SELECT id, algorithm, created_at
            FROM runs
            ORDER BY created_at DESC
            LIMIT ? OFFSET ?
            """,
            (limit, offset)
        ).fetchall()

    return [
        {
            "id": row["id"],
            "algorithm": row["algorithm"],
            "created_at": row["created_at"],
        }
        for row in rows
    ]


def get_run(run_id: str) -> Optional[Dict[str, Any]]:
    with _connect() as connection:
        row = connection.execute(
            """
            SELECT id, algorithm, input_json, output_json, steps_json, created_at
            FROM runs
            WHERE id = ?
            """,
            (run_id,)
        ).fetchone()

    if row is None:
        return None

    input_payload = json.loads(row["input_json"])
    output_payload = json.loads(row["output_json"]) if row["output_json"] else None
    steps = json.loads(row["steps_json"])

    return {
        "id": row["id"],
        "algorithm": row["algorithm"],
        "input": input_payload,
        "output": output_payload,
        "steps": steps,
        "created_at": row["created_at"],
    }
