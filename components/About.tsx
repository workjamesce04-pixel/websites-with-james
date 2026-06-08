"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { GMB } from "@/lib/gmb-data";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: 30, suffix: "+", label: "Sites Launched" },
  { value: 5.0, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: 100, suffix: "%", label: "UK Based" },
];

const points = [
  "Copy written by hand — not AI filler",
  "Sites built for Google from day one",
  "Direct line to me, no account managers",
  "Live in 7–14 days, every time",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="section-pad-lg" style={{ background: "var(--bg-secondary)" }} ref={ref}>
      <div className="container-base mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "24px", boxShadow: "var(--shadow-xl)", aspectRatio: "4/5" }}
            >
              <Image
                src="/james.jpg"
                alt="James — Founder, Websites With James"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            {/* BCG badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-6 right-6 rounded-2xl px-5 py-4"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                padding: "16px",
              }}
            >
              <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>Ex-BCG Consultant</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>Now building for small business</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="t-caption mb-4">About</p>
            <h2 className="t-title mb-6">
              Built different.
              <br />
              <span style={{ color: "var(--accent)" }}>By design.</span>
            </h2>
            <p className="t-body mb-8">{GMB.ownerBio}</p>

            <ul className="flex flex-col gap-3 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 t-label">
                  <CheckCircle2 size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  {p}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: "var(--text)", letterSpacing: "-0.03em" }}>
                    {statsInView ? (
                      <CountUp start={0} end={s.value} duration={2} decimals={s.decimals ?? 0} suffix={s.suffix} />
                    ) : "0"}
                  </div>
                  <div className="t-label text-xs">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
