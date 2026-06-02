"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GMB } from "@/lib/gmb-data";

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-24 md:py-36 px-6 sm:px-8" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest mb-5"
          style={{ color: "var(--accent)" }}
        >
          How It Works
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif mb-16"
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--text)",
          }}
        >
          Simple process.
          <br />
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
            Serious results.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {GMB.process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "2.5rem 2rem",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Watermark number */}
              <div
                className="absolute -bottom-6 -right-2 font-serif select-none pointer-events-none"
                style={{
                  fontSize: "130px",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "rgba(201,169,110,0.05)",
                }}
              >
                {step.number}
              </div>

              {/* Step number pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-7"
                style={{
                  background: "rgba(201,169,110,0.07)",
                  border: "1px solid rgba(201,169,110,0.18)",
                  color: "var(--accent)",
                }}
              >
                {step.number}
              </div>

              <h3
                className="font-serif text-xl mb-3 relative z-10"
                style={{ fontWeight: 600, letterSpacing: "-0.01em", color: "var(--text)" }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm relative z-10"
                style={{ color: "var(--text-muted)", lineHeight: 1.75 }}
              >
                {step.description}
              </p>

              {/* Bottom accent on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "#0A0A0A",
              fontWeight: 500,
              cursor: "none",
              boxShadow: "0 0 28px rgba(201,169,110,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(201,169,110,0.5)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(201,169,110,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Start the conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
