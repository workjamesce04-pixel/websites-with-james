const tags = [
  "Web Design",
  "Local SEO",
  "Google Business Profile",
  "Copywriting",
  "Analytics",
  "Speed Optimisation",
  "UK Small Business",
  "Enfield · London",
];

export default function LogoStrip() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "20px 0",
      }}
    >
      <div className="marquee-inner" style={{ display: "flex", gap: "48px", whiteSpace: "nowrap", width: "max-content" }}>
        {[...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            style={{ flexShrink: 0, fontSize: "14px", fontWeight: 500, color: "var(--text-3)" }}
          >
            {tag}
            <span style={{ marginLeft: "48px", color: "var(--border)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
