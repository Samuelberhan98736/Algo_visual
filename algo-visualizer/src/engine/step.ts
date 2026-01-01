import { AlgorithmStep } from "../types/AlgorithmStep";


export function applyStep<T>(
    prevState:T,
    step?:AlgorythmStep
): T{
    if(!step) return prevState;

    const state = structuredClone(prevState);

    switch(step.type){
        case"update":
        if (Array.isArray(state)){
            state[step.index] = step.value;

        }
        return state;

        default:
            return state;
    }
}