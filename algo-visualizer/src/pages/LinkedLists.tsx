const LinkedLists = () => {
  // List operations that benefit from pointer-by-pointer animation.
  const algorithms = [
    "Traverse nodes",
    "Insert at head or tail",
    "Delete a node",
    "Reverse a list",
    "Detect a cycle (Floyd)",
    "Merge two sorted lists",
  ];

  // Visual cues for pointer movement and node changes.
  const visualFocus = [
    "Current and next pointer highlights",
    "Pointer rewiring during inserts",
    "Node removal and gap closure",
    "Fast/slow pointer divergence",
  ];

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <header>
        <h1>Linked Lists</h1>
        <p>Follow pointer updates as nodes are added, removed, or rearranged.</p>
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
        <p>Linked list node rendering is queued after array visuals.</p>
      </section>
    </main>
  );
};

export default LinkedLists;
