const Home = () => {
  // Content model for the landing page sections.
  const focusAreas = [
    {
      title: "Arrays",
      description: "Index-based access, sliding windows, and sorting.",
    },
    {
      title: "Linked Lists",
      description: "Pointer movement, insertion, and deletion.",
    },
    {
      title: "Trees",
      description: "Traversals, balancing, and heaps.",
    },
    {
      title: "Graphs",
      description: "Search, shortest paths, and spanning trees.",
    },
    {
      title: "Dynamic Programming",
      description: "Tables, transitions, and subproblem reuse.",
    },
  ];

  // Lightweight checklist until interactive controls are wired up.
  const workflowSteps = [
    "Pick a topic and algorithm.",
    "Watch the state updates step by step.",
    "Pause, rewind, and annotate tricky moments.",
    "Compare complexity and trade-offs.",
  ];

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <header>
        <h1>Algorithm Visualizer</h1>
        <p>
          Explore classic data structures and algorithms with interactive
          walkthroughs.
        </p>
      </header>

      <section>
        <h2>Focus Areas</h2>
        <ul>
          {focusAreas.map((area) => (
            <li key={area.title}>
              <strong>{area.title}</strong> — {area.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>How It Works</h2>
        <ol>
          {workflowSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Next Steps</h2>
        <p>
          Each topic page will host interactive visualizers, code snippets, and
          guided explanations.
        </p>
      </section>
    </main>
  );
};

export default Home;
