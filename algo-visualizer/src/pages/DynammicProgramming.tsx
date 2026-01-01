const DynamicProgramming = () => {
  // Classic DP problems that map well to table animations.
  const algorithms = [
    "Fibonacci with memoization",
    "0/1 knapsack",
    "Longest common subsequence",
    "Longest increasing subsequence",
    "Coin change",
    "Edit distance",
  ];

  // Visual focus on subproblem reuse and transitions.
  const visualFocus = [
    "Table cell highlights",
    "Transition arrows",
    "Row/column sweep order",
    "Backtracking the final answer",
  ];

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <header>
        <h1>Dynamic Programming</h1>
        <p>See how overlapping subproblems build optimal solutions.</p>
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
        <p>DP tables and recursion traces will plug in next.</p>
      </section>
    </main>
  );
};

export default DynamicProgramming;
