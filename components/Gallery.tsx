"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Clock, ExternalLink } from "lucide-react";

const U = (id: string) => `https://images.unsplash.com/${id}?w=900&auto=format&q=82`;

// Real photos pulled directly from the Athole Restorations site
const atholePhotos = [
  { src: U("photo-1648657459277-2655e01810b2"), alt: "Victorian Chesterfield after restoration — rich tufted leather sofa" },
  { src: U("photo-1760611519426-541dfb7fd5a0"), alt: "Georgian wingback chair after — elegant restored finish" },
  { src: U("photo-1636138388621-258a72ecb07e"), alt: "Edwardian dining room — restored chairs, warm tones" },
  { src: U("photo-1703696397214-38482bee3b28"), alt: "1970s modular sofa reupholstered in velvet" },
  { src: U("photo-1713441649678-b08feb0e4da6"), alt: "Club chairs in forest green leather" },
  { src: U("photo-1683731332610-23d833f5871f"), alt: "Victorian pine dresser painted in warm off-white" },
];

const upcoming = [
  { name: "North London Plumber", services: "Web Design · SEO" },
  { name: "Independent Bakery, Enfield", services: "Web Design · Copy" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="gallery" style={{ background: "var(--bg)", padding: "96px 0 112px" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p className="t-caption" style={{ marginBottom: 12 }}>Work</p>
          <h2 className="t-title">
            Sites built.{" "}
            <span style={{ color: "var(--accent)" }}>Results delivered.</span>
          </h2>
        </motion.div>

        {/* Case study — Athole Restorations */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-lg)", marginBottom: 12 }}
        >
          {/* Site screenshot banner */}
          <div style={{ position: "relative", width: "100%", overflow: "hidden", height: 320, background: "#f5f0e8" }}>
            <Image
              src="/athole-screenshot.png"
              alt="Athole Restorations website — built by Websites With James"
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
            {/* Bottom fade into card */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20"
              style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
            />
          </div>

          {/* Info + photo grid */}
          <div style={{ background: "var(--bg)" }} className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Text */}
              <div className="lg:w-[40%]">
                <p className="t-caption mb-3">Web Design · Copywriting · Local SEO</p>
                <h3 className="t-title-sm mb-4">Athole Restorations</h3>
                <p className="t-body text-sm mb-4">
                  Full build for a North London furniture restoration business. New brand identity, copy written from scratch, Google Business Profile set up from zero.
                </p>
                <p className="text-sm font-medium mb-6" style={{ color: "var(--accent)" }}>
                  Live and ranking within two weeks of brief.
                </p>
                <a
                  href="https://athole-restorations.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm"
                >
                  View live site <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Photo grid from the actual Athole site */}
              <div className="lg:flex-1 grid grid-cols-3 gap-2">
                {atholePhotos.map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                    className="relative overflow-hidden rounded-xl"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 33vw, 200px"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Link to Athole */}
            <div
              className="flex items-center justify-between mt-8 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <span className="text-sm" style={{ color: "var(--text-3)" }}>
                Photos sourced from the live site — athole-restorations.vercel.app
              </span>
              <a
                href="https://athole-restorations.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: "var(--text-2)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-2)")}
              >
                <ExternalLink size={13} />
                Open site
              </a>
            </div>
          </div>
        </motion.div>

        {/* Upcoming */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {upcoming.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 24px", borderRadius: 16,
                background: "var(--bg-secondary)",
              }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)", marginBottom: 4 }}>{item.name}</div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)" }}>{item.services}</div>
              </div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5, flexShrink: 0,
                padding: "5px 12px", borderRadius: 999,
                fontSize: 12, fontWeight: 500,
                background: "rgba(0,102,204,0.08)", color: "var(--accent)",
              }}>
                <Clock size={11} /> In build
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
