"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Search, PenTool, MapPin, BarChart2, Zap } from "lucide-react";
import { GMB } from "@/lib/gmb-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  Globe, Search, PenTool, MapPin, BarChart2, Zap,
};

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof GMB.services)[number];
  index: number;
  inView: boolean;
}) {
  const Icon = iconMap[service.icon] ?? Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative group"
      style={{
        gridColumn: service.highlight ? "span 2" : "span 1",
        cursor: "none",
      }}
    >
      <div
        className="h-full rounded-2xl p-9 flex flex-col transition-all duration-300"
        style={{
          background: "#111111",
          borderTop: "2px solid var(--accent)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderTopWidth: "2px",
          borderTopColor: "var(--accent)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#141414";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.6)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#111111";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {service.highlight && (
          <span
            className="self-start mb-6 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(201,169,110,0.1)",
              color: "var(--accent)",
              border: "1px solid rgba(201,169,110,0.25)",
            }}
          >
            Core Service
          </span>
        )}

        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: "rgba(201,169,110,0.08)",
            border: "1px solid rgba(201,169,110,0.2)",
          }}
        >
          <Icon size={20} style={{ color: "var(--accent)" }} />
        </div>

        <h3
          className="font-serif text-2xl mb-3"
          style={{ fontWeight: 500, letterSpacing: "-0.01em", color: "var(--text)" }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm flex-1"
          style={{ color: "var(--text-muted)", lineHeight: 1.75 }}
        >
          {service.description}
        </p>

        {/* Ghost index */}
        <div
          className="absolute bottom-3 right-6 font-serif select-none pointer-events-none"
          style={{
            fontSize: "80px",
            fontWeight: 700,
            lineHeight: 1,
            color: "rgba(201,169,110,0.04)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 md:py-44" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8" ref={ref}>
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-widest mb-5"
            style={{ color: "var(--accent)" }}
          >
            What I Do
          </motion.div>
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
            Everything you need.
            <br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Nothing you don't.
            </span>
          </motion.h2>
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {GMB.services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
