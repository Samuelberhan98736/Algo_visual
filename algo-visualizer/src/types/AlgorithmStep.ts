export type AlgorithmStep =
  | { type: "highlight"; indices: number[] }
  | { type: "update"; index: number; value: number }
  | { type: "explain"; text: string }
  | { type: "done" };
