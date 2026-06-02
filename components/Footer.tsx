"use client";
import { GMB } from "@/lib/gmb-data";
import { Phone, Mail, MapPin } from "lucide-react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8 px-6 sm:px-8"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(201,169,110,0.2)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="font-serif text-lg mb-4"
              style={{ letterSpacing: "0.02em", color: "var(--text)" }}
            >
              <span style={{ color: "var(--accent)" }}>W</span>ebsites
              <span style={{ color: "var(--text-faint)", margin: "0 6px" }}>·</span>
              <span style={{ color: "var(--accent)" }}>W</span>ith James
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-faint)", lineHeight: 1.7 }}
            >
              Web design and local SEO for UK small businesses. Custom sites,
              compelling copy, real results.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--text-faint)" }}
            >
              Navigation
            </div>
            <ul className="flex flex-col gap-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--text-muted)", cursor: "none" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--text-faint)" }}
            >
              Contact
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${GMB.phoneTel}`}
                className="flex items-center gap-3 text-sm group"
                style={{ color: "var(--text-muted)", cursor: "none" }}
              >
                <Phone size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span className="group-hover:text-[var(--accent)] transition-colors">{GMB.phone}</span>
              </a>
              <a
                href={`mailto:${GMB.email}`}
                className="flex items-center gap-3 text-sm group"
                style={{ color: "var(--text-muted)", cursor: "none" }}
              >
                <Mail size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span className="group-hover:text-[var(--accent)] transition-colors">{GMB.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                <MapPin size={13} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
                <span>{GMB.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            color: "var(--text-faint)",
          }}
        >
          <span>© {year} {GMB.name}. All rights reserved.</span>
          <span className="uppercase tracking-widest" style={{ fontSize: "10px", color: "rgba(245,240,232,0.12)" }}>
            Built with Claude Code
          </span>
        </div>
      </div>
    </footer>
  );
}
