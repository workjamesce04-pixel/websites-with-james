"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GMB } from "@/lib/gmb-data";
import { Phone, MapPin } from "lucide-react";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh", paddingTop: "120px", paddingBottom: "80px" }}
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleField />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, #0A0A0A 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0A0A0A)" }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center pt-16 sm:pt-0">

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mb-10 inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs uppercase tracking-widest"
          style={{
            border: "1px solid rgba(201,169,110,0.35)",
            color: "var(--accent)",
            background: "rgba(201,169,110,0.06)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "var(--accent)" }}
          />
          Web Design · Local SEO · Enfield, London
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "105%" }}
            animate={visible ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="font-serif block"
            style={{
              fontSize: "clamp(64px, 11vw, 140px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "var(--text)",
            }}
          >
            Websites
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "105%" }}
            animate={visible ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="font-serif block"
            style={{
              fontSize: "clamp(64px, 11vw, 140px)",
              fontWeight: 600,
              fontStyle: "italic",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "var(--accent)",
            }}
          >
            That Work.
          </motion.h1>
        </div>

        {/* Rule + subtext */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          className="flex flex-col items-center gap-5 mb-12"
        >
          <div
            className="h-px w-16"
            style={{ background: "rgba(245,240,232,0.15)" }}
          />
          <p
            className="max-w-md text-base leading-relaxed"
            style={{ color: "var(--text-muted)", lineHeight: 1.7 }}
          >
            Ex-BCG consultant turned web designer. I build sites for UK small businesses that{" "}
            <span style={{ color: "var(--text)", fontStyle: "italic" }}>
              actually get them found.
            </span>
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0, ease }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "#0A0A0A",
              cursor: "none",
              boxShadow: "0 0 32px rgba(201,169,110,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 52px rgba(201,169,110,0.55)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(201,169,110,0.35)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Get Your Free Audit
          </a>

          <a
            href={`tel:${GMB.phoneTel}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium border transition-all duration-300"
            style={{
              borderColor: "rgba(245,240,232,0.18)",
              color: "var(--text-muted)",
              cursor: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.45)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.18)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
            }}
          >
            <Phone size={14} />
            {GMB.phone}
          </a>
        </motion.div>
      </div>

      {/* Location — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-10 left-6 sm:left-10 z-20 flex items-center gap-2 text-xs"
        style={{ color: "var(--text-faint)", letterSpacing: "0.08em" }}
      >
        <MapPin size={11} style={{ color: "var(--accent)" }} />
        {GMB.address.area}, {GMB.address.city}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--text-faint)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10 overflow-hidden rounded-full"
          style={{ background: "rgba(245,240,232,0.08)" }}
        >
          <motion.div
            className="w-full rounded-full"
            style={{ height: "40%", background: "var(--accent)" }}
            animate={{ y: ["0%", "160%", "0%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
