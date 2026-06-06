"use client";
import { GMB } from "@/lib/gmb-data";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const nav = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#gallery" },
  { label: "Reviews",  href: "#reviews" },
  { label: "Contact",  href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-secondary)" }}>

      {/* CTA band */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5.5vw 5vw 0" }}>
        <div className="footer-cta-band" style={{
          borderRadius: 20,
          background: "var(--text)",
          padding: "4vw 4vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          marginBottom: "5.5vw",
          flexWrap: "wrap",
        }}>
          <div>
            <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.025em", marginBottom: 8 }}>
              Ready for a site that <span style={{ color: "#60a5fa" }}>actually works?</span>
            </h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)" }}>Free audit. No obligation. No hard sell.</p>
          </div>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0,
            padding: "13px 24px", borderRadius: 999,
            background: "#fff", color: "var(--text)",
            fontSize: 14, fontWeight: 600, textDecoration: "none",
            transition: "background 0.15s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#f0f0f0")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#fff")}
          >
            Get Free Audit <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Main grid */}
        <div className="footer-main-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "4vw", marginBottom: "4vw" }}>

          {/* Brand */}
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Websites With James
            </div>
            <p style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.75, marginBottom: 0 }}>
              Web design and local SEO for UK small businesses. Custom sites, real rankings.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Navigation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {nav.map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: 14, color: "var(--text-2)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--text-2)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href={`tel:${GMB.phoneTel}`} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-2)", textDecoration: "none" }}>
                <Phone size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                {GMB.phone}
              </a>
              <a href={`mailto:${GMB.email}`} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-2)", textDecoration: "none", wordBreak: "break-all" }}>
                <Mail size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                {GMB.email}
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text-2)" }}>
                <MapPin size={13} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                {GMB.address.full}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "2vw", paddingBottom: "3.5vw",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 8,
          fontSize: 13, color: "var(--text-3)",
        }}>
          <span>© {year} {GMB.name}. All rights reserved.</span>
          <span>Based in {GMB.address.area}, London · UK-wide</span>
        </div>
      </div>
    </footer>
  );
}
