from fastapi import APIRouter, HTTPException

from core.step import build_insert_steps
from core.storage import insert_run
from models.schemas import ArrayInsertRequest, ArrayInsertResponse

router = APIRouter()


@router.post("/insert", response_model=ArrayInsertResponse)
def insert_array(payload: ArrayInsertRequest) -> ArrayInsertResponse:
    if payload.index < 0 or payload.index > len(payload.array):
        raise HTTPException(status_code=400, detail="Index out of range")

    steps, output_array = build_insert_steps(
        payload.array,
        payload.index,
        payload.value
    )

    run = insert_run(
        algorithm="array_insert",
        input_payload={
            "array": payload.array,
            "index": payload.index,
            "value": payload.value,
        },
        output_payload={"array": output_array},
        steps=steps
    )

    return ArrayInsertResponse(run_id=run["id"], steps=steps, output=output_array)
