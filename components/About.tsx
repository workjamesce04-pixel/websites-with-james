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

  const headingChars = "Built different.".split("");

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-36"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl aspect-[4/5]"
              style={{ background: "#111" }}
            >
              {/* Decorative image placeholder with gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #0d1117 0%, #0d1f2d 50%, #071a2b 100%)",
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: "rgba(0,212,255,0.06)" }}
              >
                <svg
                  width="280"
                  height="280"
                  viewBox="0 0 280 280"
                  fill="none"
                >
                  <circle
                    cx="140"
                    cy="140"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="140"
                    cy="140"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="140"
                    cy="140"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="140"
                    x2="280"
                    y2="140"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="140"
                    y1="0"
                    x2="140"
                    y2="280"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
              >
                <span
                  className="font-serif block"
                  style={{
                    fontSize: "clamp(72px, 15vw, 120px)",
                    color: "var(--accent)",
                    fontWeight: 300,
                    lineHeight: 1,
                    opacity: 0.15,
                  }}
                >
                  {GMB.ownerAge}
                </span>
                <span
                  className="text-sm uppercase tracking-widest mt-4"
                  style={{ color: "rgba(240,240,240,0.4)" }}
                >
                  Years old
                </span>
                <span
                  className="font-serif text-2xl mt-6"
                  style={{ color: "rgba(240,240,240,0.7)", fontStyle: "italic" }}
                >
                  Ex-BCG Consultant
                </span>
              </div>
              {/* Accent border */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                style={{ background: "var(--accent)" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 glass rounded-xl px-6 py-4"
              style={{ boxShadow: "0 0 30px rgba(0,212,255,0.1)" }}
            >
              <div
                className="text-2xl font-semibold"
                style={{ color: "var(--accent)" }}
              >
                5.0 ★
              </div>
              <div
                className="text-xs uppercase tracking-widest mt-1"
                style={{ color: "rgba(240,240,240,0.5)" }}
              >
                Google Rating
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--accent)" }}
            >
              About
            </motion.div>

            <div className="overflow-hidden mb-6">
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(42px, 7vw, 80px)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                {headingChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.025,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(240,240,240,0.55)" }}
            >
              {GMB.ownerBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex items-center gap-3 mb-12"
            >
              <div
                className="h-px flex-1"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(240,240,240,0.3)" }}
              >
                Based in Enfield · Working UK-wide
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
            </motion.div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6">
              {GMB.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <div
                    className="font-serif text-4xl md:text-5xl"
                    style={{ color: "var(--accent)", fontWeight: 300 }}
                  >
                    {statsInView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2}
                        decimals={(stat as { decimals?: number }).decimals ?? 0}
                        suffix={stat.suffix}
                      />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest mt-1"
                    style={{ color: "rgba(240,240,240,0.4)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
