from typing import Any, Dict, List, Optional

from pydantic import BaseModel


class AlgorithmStep(BaseModel):
    type: str
    indices: Optional[List[int]] = None
    index: Optional[int] = None
    value: Optional[int] = None
    text: Optional[str] = None


class ArrayInsertRequest(BaseModel):
    array: List[int]
    index: int
    value: int


class ArrayInsertResponse(BaseModel):
    run_id: str
    steps: List[AlgorithmStep]
    output: List[int]


class RunSummary(BaseModel):
    id: str
    algorithm: str
    created_at: str


class RunDetail(RunSummary):
    input: Dict[str, Any]
    output: Optional[Dict[str, Any]]
    steps: List[AlgorithmStep]
