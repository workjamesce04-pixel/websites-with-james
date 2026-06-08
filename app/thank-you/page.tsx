import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Websites With James",
  description:
    "Thanks for getting in touch — I'll be back to you within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        padding: "24px",
        fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif",
      }}
    >
      {/* Checkmark */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "rgba(0,102,204,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0066cc"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "#1d1d1f",
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Message received.
      </h1>

      {/* Sub */}
      <p
        style={{
          fontSize: 17,
          color: "#6e6e73",
          lineHeight: 1.65,
          maxWidth: 440,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Thanks for getting in touch. I&apos;ll come back to you within{" "}
        <strong style={{ color: "#1d1d1f", fontWeight: 600 }}>24 hours</strong>{" "}
        with an honest view of what your site needs.
      </p>

      {/* Back link */}
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "12px 24px",
          borderRadius: 999,
          background: "#f5f5f7",
          color: "#1d1d1f",
          fontSize: 14,
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        ← Back to home
      </Link>

      {/* Footer note */}
      <p style={{ marginTop: 48, fontSize: 13, color: "#86868b" }}>
        Websites With James · Enfield, London
      </p>
    </div>
  );
}
