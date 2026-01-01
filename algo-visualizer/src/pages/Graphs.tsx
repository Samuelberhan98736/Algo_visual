const Graphs = () => {
  // Graph algorithms with strong visual storytelling.
  const algorithms = [
    "Breadth-first search",
    "Depth-first search",
    "Dijkstra's shortest path",
    "Prim's minimum spanning tree",
    "Kruskal's minimum spanning tree",
    "Topological sort",
  ];

  // Visual elements for nodes, edges, and weights.
  const visualFocus = [
    "Frontier and visited sets",
    "Edge relaxation steps",
    "Priority queue updates",
    "Cycle detection and pruning",
  ];

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <header>
        <h1>Graphs</h1>
        <p>Navigate networks with search, pathfinding, and spanning trees.</p>
      </header>

      <section>
        <h2>Algorithms</h2>
        <ul>
          {algorithms.map((algorithm) => (
            <li key={algorithm}>{algorithm}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Visualization Focus</h2>
        <ul>
          {visualFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Status</h2>
        <p>Graph layout and edge styling will power these views.</p>
      </section>
    </main>
  );
};

export default Graphs;
