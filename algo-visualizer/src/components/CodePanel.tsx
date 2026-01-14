type Props = {
  code: string | string[];
  title?: string;
  language?: string;
  highlightedLines?: number[];
  emptyMessage?: string;
};

const monoFont =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace";

export function CodePanel({
  code,
  title,
  language,
  highlightedLines,
  emptyMessage = "Code will appear here.",
}: Props) {
  const lines = Array.isArray(code) ? code : code.split("\n");
  const hasContent = lines.some((line) => line.trim().length > 0);
  const highlightSet = new Set(highlightedLines ?? []);

  return (
    <section style={{ display: "grid", gap: "0.5rem" }}>
      {title ? <h3 style={{ margin: 0 }}>{title}</h3> : null}
      <div
        aria-label={language ? `${language} code` : "Code sample"}
        style={{
          borderRadius: 12,
          padding: "0.75rem",
          background: "#0f172a",
          color: "#e2e8f0",
          fontFamily: monoFont,
          fontSize: "0.9rem",
          lineHeight: 1.5,
          overflowX: "auto",
        }}
      >
        {hasContent ? (
          lines.map((line, index) => {
            const lineNumber = index + 1;
            const isHighlighted = highlightSet.has(lineNumber);

            return (
              <div
                key={lineNumber}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3ch 1fr",
                  gap: 12,
                  padding: "2px 6px",
                  borderRadius: 6,
                  background: isHighlighted
                    ? "rgba(148, 163, 184, 0.2)"
                    : "transparent",
                }}
              >
                <span style={{ color: "#94a3b8" }}>{lineNumber}</span>
                <span style={{ whiteSpace: "pre-wrap" }}>{line}</span>
              </div>
            );
          })
        ) : (
          <div style={{ color: "#94a3b8" }}>{emptyMessage}</div>
        )}
      </div>
    </section>
  );
}
