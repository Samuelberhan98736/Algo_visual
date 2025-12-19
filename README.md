
# 🧠 Algo Visual
Interactive Algorithm & Data Structure Visualizer

Algo Visual is a comprehensive, interactive visualization platform designed to help students, engineers, and researchers understand how algorithms work internally.  
It transforms abstract data structures and algorithms into step-by-step visual executions, acting like a debugger for core Computer Science concepts.

This project covers everything from arrays and linked lists to graph algorithms and dynamic programming, reflecting the full undergraduate CS curriculum.

---

## 🚀 Motivation

Many students learn algorithms by memorizing patterns rather than understanding execution.

Algo Visual focuses on:
- State transitions
- Pointer movement
- Recursion and stack behavior
- Dynamic programming table dependencies

The goal is to build deep intuition, not rote memorization.

---

## ✨ Key Features

- Step-by-step algorithm execution
- Play / Pause / Step Forward / Step Backward controls
- Adjustable playback speed
- Visual explanations for each algorithmic decision
- Custom user inputs (arrays, graphs, etc.)
- Live visualization of stacks, queues, trees, graphs, and DP tables
- Pseudocode panel with active line highlighting

---

## 📚 Supported Topics

### Data Structures
- Arrays & Dynamic Arrays
- Linked Lists (Singly & Doubly)
- Stacks & Queues
- Trees (Binary Trees, BSTs, Heaps)
- Graphs

### Algorithms
- Sorting Algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap)
- Graph Algorithms (BFS, DFS, Topological Sort, Dijkstra, A*)
- Dynamic Programming (Fibonacci, Knapsack, Coin Change, LCS, LIS)
- Greedy Algorithms
- Union-Find (Disjoint Sets)

---

## 🧱 High-Level Architecture

Algo Visual is built with strict separation of concerns to ensure scalability and correctness.

```

algo-visual/
├── src/
│   ├── algorithms/        # Pure algorithm logic (no UI code)
│   │   ├── arrays/
│   │   ├── linked-lists/
│   │   ├── stacks-queues/
│   │   ├── trees/
│   │   ├── graphs/
│   │   ├── sorting/
│   │   └── dynamic-programming/
│   │
│   ├── engine/            # Visualization runtime & playback engine
│   │   ├── AlgorithmRunner.ts
│   │   ├── Step.ts
│   │   └── usePlayback.ts
│   │
│   ├── visualizers/       # React components that render algorithm steps
│   │   ├── ArrayVisualizer/
│   │   ├── LinkedListVisualizer/
│   │   ├── TreeVisualizer/
│   │   ├── GraphVisualizer/
│   │   └── DpTableVisualizer/
│   │
│   ├── components/        # Shared UI components
│   │   ├── Controls.tsx
│   │   ├── CodePanel.tsx
│   │   └── ExplanationPanel.tsx
│   │
│   ├── pages/             # Route-level pages
│   │   ├── Home.tsx
│   │   ├── Arrays.tsx
│   │   ├── LinkedLists.tsx
│   │   ├── Trees.tsx
│   │   ├── Graphs.tsx
│   │   └── DynamicProgramming.tsx
│   │
│   └── types/             # Shared TypeScript types
│       └── AlgorithmStep.ts

```

---

## 🔁 Step-Based Execution Model

All algorithms emit steps instead of directly mutating UI state.

```

export type AlgorithmStep =
| { type: "highlight"; indices?: number[]; nodeId?: number }
| { type: "swap"; i: number; j: number }
| { type: "update"; index: number; value: number }
| { type: "pointer"; from: number; to: number | null }
| { type: "visit"; node: number }
| { type: "table"; row: number; col: number; value: number }
| { type: "explain"; text: string }
| { type: "done" };

```

The visualization engine replays these steps forward or backward, enabling:
- Deterministic playback
- Time-travel debugging
- Reusable visualizers across multiple algorithms

---

## 🛠️ Tech Stack

- Frontend: React + TypeScript
- Animations: Framer Motion
- State Management: Zustand
- Build Tool: Vite
- Styling: CSS / Tailwind (optional)
- Deployment: GitHub Pages or Vercel

---

## 🧪 Example: BFS Execution Flow

1. Push the start node into the queue
2. Visit the node and mark it as visited
3. Enqueue all unvisited neighbors
4. Emit a step for each state change
5. Visualizer renders node highlights and queue state

---

## 🗺️ Roadmap

### Phase 1 — Core Foundations
- Arrays
- Linked Lists
- Sorting Algorithms

### Phase 2 — Advanced Structures
- Trees & Heaps
- Graph Algorithms

### Phase 3 — Dynamic Programming
- DP table visualization
- Dependency highlighting
- Recursion vs DP comparison

### Phase 4 — Polish & Expansion
- Custom input editor
- Algorithm comparison mode
- Performance metrics & complexity insights

---

## 📈 Why This Project Matters

- Demonstrates deep algorithmic understanding
- Goes beyond memorization-based problem solving
- Ideal for interviews, teaching, and self-study
- Strong portfolio project for software engineering and research roles

---
