** high level architecture.**
algo-visual/
├── src/
│   ├── algorithms/        ← logic only (NO UI)
│   │   ├── arrays/
│   │   ├── linked-lists/
│   │   ├── stacks-queues/
│   │   ├── trees/
│   │   ├── graphs/
│   │   ├── sorting/
│   │   ├── dynamic-programming/
│   │   └── greedy/
│   │
│   ├── visualizers/       ← UI that consumes steps
│   │   ├── ArrayViz/
│   │   ├── LinkedListViz/
│   │   ├── TreeViz/
│   │   ├── GraphViz/
│   │   ├── DpTableViz/
│   │
│   ├── engine/            ← playback system
│   │   ├── Step.ts
│   │   ├── AlgorithmRunner.ts
│   │   ├── usePlayback.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Arrays.tsx
│   │   ├── LinkedLists.tsx
│   │   ├── Trees.tsx
│   │   ├── Graphs.tsx
│   │   ├── DP.tsx
│   │
│   ├── components/
│   │   ├── Controls.tsx
│   │   ├── CodePanel.tsx
│   │   ├── ExplanationPanel.tsx
│   │
│   └── types/
│       └── AlgorithmStep.ts
