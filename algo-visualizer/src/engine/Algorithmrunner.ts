import {useEffect, useState} from "react";
import { AlgorithmStep } from "../types/AlgorithmStep";
import { usePlayback } from "./usePlayback";
import { applyStep } from "./step";


export function useAlgorithmRunner<T>(
    initialState: T,
    steps: AlgorithmStep[]
){
    const playback = usePlayback(steps);
    const [state, setState] = useState<T>(initialState);

    //reset state when new steps arrive
    useEffect(()=>{
        setState((prev) => applyStep(prev, playback.step));
    }, [playback.step]);

    return{
        state,
        playback,
    };
}