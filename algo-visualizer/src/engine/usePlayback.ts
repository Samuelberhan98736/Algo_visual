import { useEffect, useRef, useState } from "react";
import { AlgorithmStep } from "../types/AlgorithmStep";

export function usePlayback(
  steps: AlgorithmStep[],
  speedMs: number = 600
) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;

    timer.current = window.setInterval(() => {
      setIndex((i) => Math.min(i + 1, steps.length - 1));
    }, speedMs);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, speedMs, steps.length]);

  function play() {
    setPlaying(true);
  }

  function pause() {
    setPlaying(false);
  }

  function next() {
    setIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function prev() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  function reset() {
    setPlaying(false);
    setIndex(0);
  }

  return {
    step: steps[index],
    index,
    isPlaying: playing,
    play,
    pause,
    next,
    prev,
    reset,
  };
}
