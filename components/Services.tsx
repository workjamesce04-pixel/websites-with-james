"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Search,
  PenTool,
  MapPin,
  BarChart2,
  Zap,
} from "lucide-react";
import { GMB } from "@/lib/gmb-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  Globe,
  Search,
  PenTool,
  MapPin,
  BarChart2,
  Zap,
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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-9 group relative overflow-hidden"
      style={{
        gridColumn: service.highlight ? "span 2" : "span 1",
        cursor: "none",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,212,255,0.35)";
        el.style.boxShadow = "0 0 40px rgba(0,212,255,0.12), 0 0 80px rgba(0,212,255,0.06), inset 0 1px 0 rgba(0,212,255,0.1)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Glow */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.03) 0%, transparent 60%)",
        }}
      />

      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: "rgba(0,212,255,0.08)",
          border: "1px solid rgba(0,212,255,0.15)",
        }}
      >
        <Icon size={20} style={{ color: "var(--accent)" }} />
      </div>

      <h3
        className="font-serif text-xl mb-3"
        style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(240,240,240,0.5)" }}
      >
        {service.description}
      </p>

      {service.highlight && (
        <span
          className="absolute top-5 right-5 text-xs uppercase tracking-widest px-3 py-1 rounded-full"
          style={{
            background: "rgba(0,212,255,0.1)",
            color: "var(--accent)",
            border: "1px solid rgba(0,212,255,0.2)",
          }}
        >
          Core Service
        </span>
      )}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 md:py-36" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-widest mb-4"
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
              fontSize: "clamp(38px, 6vw, 72px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Everything you need.
            <br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Nothing you don't.
            </span>
          </motion.h2>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {GMB.services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
