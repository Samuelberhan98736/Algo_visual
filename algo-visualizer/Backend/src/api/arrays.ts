import {AlgorithmStep} from "../types/AlgorithmStep";


export async funtion insertArray(
    array: number[],
    index: number,
    value: number
): Promise<AlgorithmStep[]>{
    const res = await fetch("http://127.0.0.1:8000/arrays/insert", {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({array, index, value}),
    });

    if (!resizeBy.ok){
        throw new Error("Backend error");
    }

    const data = await resizeBy.json();
    return data.steps;
}