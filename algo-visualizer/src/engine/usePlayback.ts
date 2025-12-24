// core of everything

import { useEffect, useRef, useState } from "react";
import { AlgorithmStep } from "../types/AlgorithmStep";

export function usePlayback(steps: AlgorithmStep[], speed = 500) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (steps.length === 0) {
      setIndex(0);
      setIsPlaying(false);
      return;
    }
    setIndex((i) => Math.min(i, steps.length - 1));
  }, [steps.length]);

  useEffect(() => {
    if (!isPlaying || steps.length === 0) return;
    timer.current = window.setInterval(() => {
      setIndex((i) => {
        if (i >= steps.length - 1) {
          setIsPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, speed);

    return () => {
      if (timer.current !== null) clearInterval(timer.current);
    };
  }, [isPlaying, speed, steps.length]);

  function play() {
    if (steps.length === 0) return;
    setIsPlaying(true);
  }

  function pause() {
    setIsPlaying(false);
  }

  function next() {
    if (steps.length === 0) return;
    setIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function prev() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  function reset() {
    setIndex(0);
    setIsPlaying(false);
  }

  return {
    step: steps[index],
    index,
    play,
    pause,
    next,
    prev,
    reset,
    playing: isPlaying,
  };
}
