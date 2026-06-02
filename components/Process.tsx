"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GMB } from "@/lib/gmb-data";

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="py-28 md:py-40"
      style={{ background: "#0d0d0d" }}
    >
      <div className="orb" style={{ width: 450, height: 450, top: "20%", left: "50%", transform: "translateX(-50%)", background: "rgba(0,212,255,0.04)", position: "absolute" }} />
      <div className="max-w-7xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "var(--accent)" }}
        >
          How It Works
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif mb-20"
          style={{
            fontSize: "clamp(38px, 6vw, 72px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
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
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="grad-border glass rounded-2xl p-8 group relative overflow-hidden"
              style={{ cursor: "none", transition: "box-shadow 0.35s, transform 0.35s" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.08)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Giant ghost number */}
              <div
                className="absolute -bottom-4 -right-2 font-serif select-none pointer-events-none"
                style={{
                  fontSize: "clamp(90px, 14vw, 150px)",
                  fontWeight: 700,
                  color: "rgba(0,212,255,0.05)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>

              {/* Step pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-6"
                style={{
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  color: "var(--accent)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                Step {step.number}
              </div>

              <h3
                className="font-serif text-2xl mb-4 relative z-10"
                style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm leading-relaxed relative z-10"
                style={{ color: "rgba(240,240,240,0.55)", lineHeight: 1.75 }}
              >
                {step.description}
              </p>

              {/* Accent bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-b-2xl"
                style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "#080808",
              fontWeight: 500,
              cursor: "none",
              boxShadow: "0 0 30px rgba(0,212,255,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 50px rgba(0,212,255,0.5)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 30px rgba(0,212,255,0.3)";
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
