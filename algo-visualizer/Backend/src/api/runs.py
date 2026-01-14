from typing import List

from fastapi import APIRouter, HTTPException, Query

from core.storage import get_run, list_runs
from models.schemas import RunDetail, RunSummary

router = APIRouter()


@router.get("", response_model=List[RunSummary])
def fetch_runs(
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0)
) -> List[RunSummary]:
    return list_runs(limit=limit, offset=offset)


@router.get("/{run_id}", response_model=RunDetail)
def fetch_run(run_id: str) -> RunDetail:
    run = get_run(run_id)
    if not run:
        raise HTTPException(status_code=404, detail="Run not found")
    return run
