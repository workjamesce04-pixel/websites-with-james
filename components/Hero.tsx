"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { GMB } from "@/lib/gmb-data";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  return (
    <section
      id="hero"
      style={{
        background: "#fff",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 64,
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 48,
      }}>

        {/* Left — text */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: 28 }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 14px", borderRadius: 999,
              background: "rgba(0,102,204,0.08)", color: "var(--accent)",
              fontSize: 13, fontWeight: 500,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
              Taking on new clients
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(44px, 7vw, 96px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              color: "var(--text)",
              marginBottom: 24,
            }}
          >
            Your website.
            <br />
            <span style={{ color: "var(--accent)" }}>Finally working.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 17,
              color: "var(--text-2)",
              lineHeight: 1.65,
              maxWidth: 440,
              marginBottom: 36,
            }}
          >
            Ex-BCG consultant. I build custom websites and local SEO for UK small businesses — so your phone actually rings.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}
          >
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "13px 24px", borderRadius: 999,
              background: "var(--accent)", color: "#fff",
              fontSize: 15, fontWeight: 500, textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--accent-hover)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--accent)")}
            >
              Get a Free Audit <ArrowRight size={15} />
            </a>
            <a href="#gallery" style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "13px 24px", borderRadius: 999,
              background: "var(--bg-secondary)", color: "var(--text)",
              fontSize: 15, fontWeight: 500, textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#e8e8ed")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)")}
            >
              See the Work
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
            style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#FFB800" style={{ color: "#FFB800" }} />)}
              </div>
              <span style={{ fontSize: 14, color: "var(--text-2)", fontWeight: 500 }}>5.0 Google</span>
            </div>
            <div className="hero-trust-divider" style={{ width: 1, height: 16, background: "var(--border)" }} />
            <span style={{ fontSize: 14, color: "var(--text-2)" }}>30+ sites built</span>
            <div className="hero-trust-divider" style={{ width: 1, height: 16, background: "var(--border)" }} />
            <span style={{ fontSize: 14, color: "var(--text-2)" }}>Live in 7–14 days</span>
          </motion.div>
        </div>

        {/* Right — photo (hidden below lg breakpoint via CSS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={ready ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-photo-col"
          style={{ flexShrink: 0, width: 480, position: "relative" }}
        >
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/5",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.1)",
          }}>
            <Image
              src="/james.jpg"
              alt="James — Websites With James"
              fill
              className="object-cover object-top"
              priority
              sizes="480px"
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: 160,
              background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
            }} />
            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em" }}>James</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 2 }}>Founder · Ex-BCG · Enfield, London</div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 1.1 }}
            style={{
              position: "absolute", left: -24, top: "32%",
              background: "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)",
              borderRadius: 16, padding: "12px 18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em" }}>30+</div>
            <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 1 }}>Sites launched</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 1.25 }}
            style={{
              position: "absolute", right: -16, top: "22%",
              background: "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)",
              borderRadius: 16, padding: "12px 18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em" }}>5.0 ★</div>
            <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 1 }}>Google rating</div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-photo-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
