"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { GMB } from "@/lib/gmb-data";

type Review = (typeof GMB.reviews)[number] & { business?: string };

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="reviews" style={{ background: "var(--bg-secondary)", padding: "8vw 0 9vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5vw" }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 20 }}
        >
          <p className="t-caption" style={{ marginBottom: 12 }}>Reviews</p>
          <h2 className="t-title" style={{ marginBottom: 20 }}>
            Results speak.{" "}
            <span style={{ color: "var(--accent)" }}>Clients confirm.</span>
          </h2>
        </motion.div>

        {/* Rating row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 56 }}
        >
          <span style={{ fontSize: 40, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.04em" }}>5.0</span>
          <div>
            <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={15} fill="#FFB800" style={{ color: "#FFB800" }} />)}
            </div>
            <p className="t-caption">Google Rating · Perfect score</p>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: "4vw" }}>
          {(GMB.reviews as unknown as Review[]).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "2.3vw 2.3vw 2vw",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Stars + badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 3 }}>
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={13} fill="#FFB800" style={{ color: "#FFB800" }} />
                  ))}
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 500,
                  padding: "3px 10px", borderRadius: 999,
                  background: "rgba(66,133,244,0.08)", color: "#4285f4",
                }}>
                  Google
                </span>
              </div>

              {/* Quote */}
              <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, fontStyle: "italic", flex: 1, marginBottom: 24 }}>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "var(--bg-secondary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 600, color: "var(--text)", flexShrink: 0,
                }}>
                  {review.name[0]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {review.name}
                  </div>
                  {review.business && (
                    <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {review.business}
                    </div>
                  )}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-3)", flexShrink: 0 }}>{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ textAlign: "center" }}
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
            Get your free audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
