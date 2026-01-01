const Trees = () => {
  // Tree algorithms that depend on hierarchical traversal.
  const algorithms = [
    "Preorder, inorder, postorder traversal",
    "Level-order traversal",
    "Binary search tree insert/search",
    "Heapify and heap sort",
    "AVL or red-black rotations",
  ];

  // Visual focus for balancing and traversal paths.
  const visualFocus = [
    "Traversal path highlighting",
    "Rotation animations for balancing",
    "Heap swaps across levels",
    "Parent-child pointer updates",
  ];

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <header>
        <h1>Trees</h1>
        <p>Understand hierarchical data with animated traversals and rotations.</p>
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
        <p>Tree layout calculations will drive these visualizers.</p>
      </section>
    </main>
  );
};

export default Trees;
