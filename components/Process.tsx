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
      className="py-24 md:py-36"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "rgba(255,255,255,0.06)" }}>
          {GMB.process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="relative p-8 group"
              style={{ background: "#0d0d0d", cursor: "none" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#111";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0d0d0d";
              }}
            >
              {/* Giant number behind */}
              <div
                className="absolute top-4 right-6 font-serif select-none pointer-events-none"
                style={{
                  fontSize: "clamp(80px, 12vw, 140px)",
                  fontWeight: 700,
                  color: "rgba(0,212,255,0.04)",
                  lineHeight: 1,
                  transition: "color 0.3s",
                }}
              >
                {step.number}
              </div>

              <div
                className="text-xs uppercase tracking-widest mb-6"
                style={{ color: "var(--accent)" }}
              >
                {step.number}
              </div>

              <h3
                className="font-serif text-2xl mb-4 relative z-10"
                style={{ fontWeight: 400 }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm leading-relaxed relative z-10"
                style={{ color: "rgba(240,240,240,0.5)" }}
              >
                {step.description}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: "var(--accent)" }}
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
