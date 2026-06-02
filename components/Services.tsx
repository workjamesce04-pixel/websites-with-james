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
      className="grad-border glass rounded-2xl p-9 group relative overflow-hidden"
      style={{
        gridColumn: service.highlight ? "span 2" : "span 1",
        cursor: "none",
        transition: "box-shadow 0.35s, transform 0.35s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.1)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Ambient glow top-right */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)" }}
      />

      {/* Ghost index number */}
      <div
        className="absolute bottom-4 right-6 font-serif select-none pointer-events-none transition-colors duration-500"
        style={{
          fontSize: "clamp(60px,10vw,100px)",
          fontWeight: 700,
          lineHeight: 1,
          color: "rgba(0,212,255,0.04)",
        }}
      >
        0{index + 1}
      </div>

      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(0,212,255,0.3)]"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0.06) 100%)",
          border: "1px solid rgba(0,212,255,0.25)",
        }}
      >
        <Icon size={22} style={{ color: "var(--accent)" }} />
      </div>

      <h3
        className="font-serif text-2xl mb-3 relative z-10"
        style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed relative z-10"
        style={{ color: "rgba(240,240,240,0.55)", lineHeight: 1.75 }}
      >
        {service.description}
      </p>

      {service.highlight && (
        <span
          className="absolute top-6 right-6 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(0,212,255,0.12)",
            color: "var(--accent)",
            border: "1px solid rgba(0,212,255,0.3)",
            boxShadow: "0 0 12px rgba(0,212,255,0.1)",
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
    <section id="services" className="py-28 md:py-40" style={{ background: "#080808" }}>
      <div className="orb" style={{ width: 500, height: 500, top: "10%", right: "-15%", background: "rgba(0,212,255,0.05)", position: "absolute" }} />
      <div className="orb" style={{ width: 350, height: 350, bottom: "10%", left: "-10%", background: "rgba(0,100,200,0.04)", position: "absolute" }} />
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
