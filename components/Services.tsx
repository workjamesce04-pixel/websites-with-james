"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Globe, Search, PenTool, MapPin, BarChart2, Zap, ArrowRight } from "lucide-react";
import { GMB } from "@/lib/gmb-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = { Globe, Search, PenTool, MapPin, BarChart2, Zap };

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" style={{ background: "var(--bg)", padding: "8vw 0 9vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5vw" }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "5.5vw" }}
        >
          <p className="t-caption" style={{ marginBottom: 12 }}>Services</p>
          <h2 className="t-title">
            Everything your business needs.
            <br />
            <span style={{ color: "var(--accent)" }}>Nothing it doesn&apos;t.</span>
          </h2>
        </motion.div>

        {/* Feature banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="services-banner"
          style={{
            borderRadius: 20,
            overflow: "hidden",
            background: "var(--bg-secondary)",
            display: "flex",
            flexDirection: "row",
            minHeight: 340,
            marginBottom: 16,
          }}
        >
          <div className="services-banner-text" style={{ flex: "0 0 44%", padding: "4vw 3.7vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{
              display: "inline-block", alignSelf: "flex-start", marginBottom: 16,
              padding: "4px 12px", borderRadius: 999,
              background: "rgba(0,102,204,0.1)", color: "var(--accent)",
              fontSize: 12, fontWeight: 500,
            }}>
              Core Service
            </span>
            <h3 style={{ fontSize: 28, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.025em", marginBottom: 12, lineHeight: 1.2 }}>
              Website Design &amp; Build
            </h3>
            <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 24 }}>
              Custom-built sites that look expensive and load fast. No templates, no shortcuts. Usually live in 7–14 days.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 500 }}>
              <span style={{ color: "var(--text-3)" }}>From £500</span>
              <span style={{ color: "var(--border)" }}>·</span>
              <a href="#contact" style={{ color: "var(--accent)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
                Get started <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="services-banner-image" style={{ flex: "0 0 56%", position: "relative", minHeight: 280 }}>
            <Image
              src="/athole-screenshot.png"
              alt="Example site — Athole Restorations"
              fill
              className="object-cover object-left-top"
              sizes="660px"
            />
            <div style={{
              position: "absolute", inset: "0 auto 0 0", width: 48,
              background: "linear-gradient(to right, var(--bg-secondary), transparent)",
            }} />
          </div>
        </motion.div>

        {/* Service cards grid */}
        <div className="service-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {GMB.services.slice(1).map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                style={{
                  background: "var(--bg-secondary)",
                  borderRadius: 16,
                  padding: "2.3vw 2.3vw 2.7vw",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ebebef";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: "rgba(0,102,204,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: 8 }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65 }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              background: "var(--accent)",
              borderRadius: 16,
              padding: "28px 28px 32px",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              textDecoration: "none", transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em", marginBottom: 8 }}>
                Not sure what you need?
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>
                Free 30-minute call — I&apos;ll tell you exactly what your site needs.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 24, fontSize: 14, fontWeight: 500, color: "#fff" }}>
              Book free call <ArrowRight size={14} />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
