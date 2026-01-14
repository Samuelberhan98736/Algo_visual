type Props = {
  title?: string;
  summary?: string;
  steps?: string[];
  currentStep?: string;
};

export function Explanation({
  title = "Explanation",
  summary,
  steps,
  currentStep,
}: Props) {
  return (
    <section style={{ display: "grid", gap: "0.5rem" }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      {summary ? <p style={{ margin: 0 }}>{summary}</p> : null}
      {currentStep ? (
        <div
          style={{
            padding: "0.5rem 0.75rem",
            borderRadius: 8,
            background: "#f1f5f9",
            color: "#0f172a",
          }}
        >
          <strong>Current:</strong> {currentStep}
        </div>
      ) : null}
      {steps && steps.length > 0 ? (
        <ol style={{ margin: 0, paddingLeft: "1.25rem" }}>
          {steps.map((step, index) => (
            <li key={`${index}-${step}`}>{step}</li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}
