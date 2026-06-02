"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GMB } from "@/lib/gmb-data";
import { Phone, MapPin, ChevronDown } from "lucide-react";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const HEADING = "Websites\nThat Work.";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [visible, setVisible] = useState(false);
  const taglineRef = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const tagline = GMB.tagline;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(tagline.slice(0, i));
      if (i >= tagline.length) clearInterval(timer);
    }, 38);
    taglineRef.current = timer as unknown as number;
    return () => clearInterval(timer);
  }, [visible]);

  const words = HEADING.split("\n");

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Ambient orbs */}
      <div className="orb float-slow" style={{ width: 600, height: 600, top: "-10%", left: "-10%", background: "rgba(0,212,255,0.07)", zIndex: 1 }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: "5%", right: "-5%", background: "rgba(0,212,255,0.05)", zIndex: 1, animation: "float-slow 12s ease-in-out infinite reverse" }} />
      <div className="orb" style={{ width: 300, height: 300, top: "40%", left: "60%", background: "rgba(0,100,180,0.06)", zIndex: 1, animation: "float-slow 15s ease-in-out infinite" }} />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #080808 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #080808)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {motion && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs uppercase tracking-widest"
              style={{
                border: "1px solid rgba(0,212,255,0.4)",
                color: "var(--accent)",
                background: "rgba(0,212,255,0.08)",
                boxShadow: "0 0 20px rgba(0,212,255,0.12), inset 0 1px 0 rgba(0,212,255,0.15)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
              />
              Web Design · Local SEO · Enfield, London
            </motion.div>

            {words.map((line, li) => (
              <div
                key={li}
                className="overflow-hidden"
                style={{ lineHeight: 1.05 }}
              >
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={visible ? { y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.3 + li * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-serif block"
                  style={{
                    fontSize: "clamp(64px, 13vw, 148px)",
                    color: "#f0f0f0",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="mt-6 text-lg md:text-xl font-light tracking-wide min-h-[1.5em]"
              style={{ color: "var(--accent)" }}
            >
              {typed}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 max-w-lg text-sm md:text-base leading-relaxed"
              style={{ color: "rgba(240,240,240,0.5)" }}
            >
              {GMB.ownerShortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300"
                style={{
                  background: "var(--accent)",
                  color: "#080808",
                  cursor: "none",
                  boxShadow: "0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 50px rgba(0,212,255,0.6), 0 0 100px rgba(0,212,255,0.25)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.15)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                Get Your Free Audit
              </a>

              <a
                href={`tel:${GMB.phoneTel}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium border transition-all duration-300"
                style={{
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "rgba(240,240,240,0.8)",
                  cursor: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(240,240,240,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#f0f0f0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(240,240,240,0.8)";
                }}
              >
                <Phone size={14} />
                {GMB.phone}
              </a>
            </motion.div>
          </>
        )}
      </div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-10 left-6 z-20 flex items-center gap-2 text-xs"
        style={{ color: "rgba(240,240,240,0.35)", letterSpacing: "0.08em" }}
      >
        <MapPin size={11} style={{ color: "var(--accent)" }} />
        {GMB.address.area}, {GMB.address.city}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "rgba(240,240,240,0.25)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ChevronDown size={16} style={{ color: "rgba(240,240,240,0.25)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
