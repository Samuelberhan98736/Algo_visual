const Arrays = () => {
  // Core algorithms that fit naturally with array visualizations.
  const algorithms = [
    "Binary search",
    "Two-pointer sweep",
    "Sliding window",
    "Merge sort",
    "Quick sort",
    "Prefix sums",
  ];

  // Visual focus areas for the array playground.
  const visualFocus = [
    "Index highlights for comparisons",
    "Swaps and overwrites in-place",
    "Window expansion and contraction",
    "Auxiliary arrays for merges",
  ];

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <header>
        <h1>Arrays</h1>
        <p>Explore algorithms that rely on indexed access and contiguous data.</p>
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
        <p>Array controls will plug into the visualizer engine next.</p>
      </section>
    </main>
  );
};

export default Arrays;
