"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { GMB } from "@/lib/gmb-data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-36 px-6 sm:px-8"
      style={{ background: "#0D0D0D" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: pull quote + bio */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--accent)" }}
            >
              About
            </motion.div>

            {/* Pull quote heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10"
            >
              <div
                className="w-10 h-0.5 mb-8"
                style={{ background: "var(--accent)" }}
              />
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(44px, 7vw, 84px)",
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                }}
              >
                Built
                <br />
                <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  different.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base mb-8"
              style={{ color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "480px" }}
            >
              {GMB.ownerBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.07)" }} />
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--text-faint)" }}
              >
                Based in Enfield · Working UK-wide
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.07)" }} />
            </motion.div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6">
              {GMB.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="border-t pt-5"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="font-serif text-4xl md:text-5xl mb-1"
                    style={{ color: "var(--accent)", fontWeight: 500 }}
                  >
                    {statsInView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2}
                        decimals={(stat as { decimals?: number }).decimals ?? 0}
                        suffix={stat.suffix}
                      />
                    ) : "0"}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: identity panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl aspect-[4/5]"
              style={{
                background: "linear-gradient(135deg, #0d0d0d 0%, #1a1408 50%, #0d0d0a 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: "rgba(201,169,110,0.05)" }}
              >
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                  <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="150" cy="150" r="85" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="150" cy="150" r="50" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="0" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="150" y1="0" x2="150" y2="300" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span
                  className="font-serif block mb-2"
                  style={{
                    fontSize: "clamp(80px, 16vw, 130px)",
                    color: "var(--accent)",
                    fontWeight: 400,
                    lineHeight: 1,
                    opacity: 0.12,
                  }}
                >
                  {GMB.ownerAge}
                </span>
                <span
                  className="text-xs uppercase tracking-widest mb-5"
                  style={{ color: "var(--text-faint)" }}
                >
                  Years old
                </span>
                <span
                  className="font-serif text-2xl"
                  style={{ color: "rgba(245,240,232,0.65)", fontStyle: "italic" }}
                >
                  Ex-BCG Consultant
                </span>
              </div>

              {/* Gold bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: "var(--accent)" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 rounded-xl px-6 py-4"
              style={{
                background: "#111111",
                border: "1px solid rgba(201,169,110,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <div className="text-2xl font-semibold" style={{ color: "var(--accent)" }}>
                5.0 ★
              </div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "var(--text-faint)" }}>
                Google Rating
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
