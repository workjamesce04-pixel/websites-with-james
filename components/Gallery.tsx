"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    client: "Athole Restorations",
    category: "Web Design · Copy · Local SEO",
    description:
      "Full website build for a family-run vehicle restoration business in rural Scotland. New brand, copy written from scratch, and Google Business Profile set up from zero.",
    outcome: "Live and ranking within two weeks.",
    url: "https://athole-restorations.vercel.app",
    accentColor: "#8B7355",
    tags: ["Web Design", "Copywriting", "SEO"],
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-32 md:py-44" style={{ background: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest mb-5"
          style={{ color: "var(--accent)" }}
        >
          Work
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--text)",
            }}
          >
            Sites built.
            <br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Results delivered.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm max-w-xs"
            style={{ color: "var(--text-faint)" }}
          >
            More sites currently in build — portfolio expanding monthly.
          </motion.p>
        </div>

        {/* Case study card */}
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden mb-5"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Browser mockup panel */}
            <div
              className="flex flex-col"
              style={{ background: "#111111", minHeight: "340px" }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#141414" }}
              >
                <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                <div
                  className="ml-3 flex-1 h-6 rounded-md flex items-center px-3 text-xs"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "var(--text-faint)",
                    fontFamily: "monospace",
                  }}
                >
                  athole-restorations.vercel.app
                </div>
              </div>

              {/* Preview area */}
              <div
                className="flex-1 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0f0d0a 0%, #1a1208 50%, #0f0d0a 100%)",
                }}
              >
                {/* Decorative content inside the "browser" */}
                <div className="text-center px-8">
                  <div
                    className="font-serif mb-3"
                    style={{
                      fontSize: "clamp(28px, 5vw, 48px)",
                      fontWeight: 600,
                      color: "#C9A96E",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Athole Restorations
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(245,240,232,0.4)" }}
                  >
                    Classic Vehicle Restoration · Scotland
                  </p>
                  <div className="mt-6 flex justify-center gap-2">
                    {["Web Design", "SEO", "Copy"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(201,169,110,0.08)",
                          border: "1px solid rgba(201,169,110,0.2)",
                          color: "#C9A96E",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div
              className="flex flex-col justify-between p-10"
              style={{
                background: "#111111",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div>
                <div
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  {study.category}
                </div>
                <h3
                  className="font-serif text-3xl mb-5"
                  style={{ fontWeight: 600, color: "var(--text)", letterSpacing: "-0.02em" }}
                >
                  {study.client}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-muted)", lineHeight: 1.75 }}
                >
                  {study.description}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--accent)", fontStyle: "italic" }}
                >
                  {study.outcome}
                </p>
              </div>

              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest group transition-colors duration-200"
                style={{ color: "var(--text-faint)", cursor: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")}
              >
                View Live Site
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl flex items-center justify-center py-14 px-8"
          style={{
            border: "1px dashed rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.015)",
          }}
        >
          <div className="text-center">
            <div
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "var(--text-faint)" }}
            >
              Up next
            </div>
            <p
              className="font-serif text-xl"
              style={{ color: "var(--text-muted)", fontStyle: "italic" }}
            >
              More sites in build — check back soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
