"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GMB } from "@/lib/gmb-data";

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" style={{ background: "var(--bg-secondary)", padding: "96px 0 112px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p className="t-caption" style={{ marginBottom: 12 }}>How It Works</p>
          <h2 className="t-title">
            Simple process.{" "}
            <span style={{ color: "var(--accent)" }}>Real results.</span>
          </h2>
        </motion.div>

        {/* Step cards */}
        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 48 }}>
          {GMB.process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "32px 24px 28px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Step number */}
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: i === 0 ? "var(--accent)" : "var(--bg-secondary)",
                color: i === 0 ? "#fff" : "var(--text)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700,
                marginBottom: 24, flexShrink: 0,
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: 8 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "12px 28px", borderRadius: 999,
              background: "var(--accent)", color: "#fff",
              fontSize: 14, fontWeight: 500, textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--accent-hover)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--accent)")}
          >
            Start the conversation <ArrowRight size={14} />
          </a>
          <span style={{ fontSize: 14, color: "var(--text-3)" }}>
            Free 30-min discovery call · No obligation
          </span>
        </motion.div>
      </div>
    </section>
  );
}
