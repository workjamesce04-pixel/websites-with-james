"use client";
import { GMB } from "@/lib/gmb-data";
import { Phone, Mail, MapPin } from "lucide-react";

const SocialIcons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  XTwitter: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: "#050505",
        borderTop: "1px solid var(--accent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-lg font-semibold tracking-tight mb-4"
              style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              <span style={{ color: "var(--accent)" }}>W</span>ebsites
              <span className="text-white/30 mx-1">·</span>
              <span style={{ color: "var(--accent)" }}>W</span>ith James
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(240,240,240,0.4)" }}
            >
              Web design and local SEO for UK small businesses. Custom sites,
              compelling copy, real results.
            </p>
            <div className="flex gap-3">
              {[
                { icon: SocialIcons.Instagram, href: GMB.social.instagram, label: "Instagram" },
                { icon: SocialIcons.Linkedin, href: GMB.social.linkedin, label: "LinkedIn" },
                { icon: SocialIcons.XTwitter, href: GMB.social.twitter, label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(240,240,240,0.5)",
                    cursor: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,0.5)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "rgba(240,240,240,0.35)" }}
            >
              Navigation
            </div>
            <ul className="flex flex-col gap-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(240,240,240,0.5)", cursor: "none" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(240,240,240,0.5)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP */}
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "rgba(240,240,240,0.35)" }}
            >
              Contact
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${GMB.phoneTel}`}
                className="flex items-center gap-3 text-sm group"
                style={{ color: "rgba(240,240,240,0.5)", cursor: "none" }}
              >
                <Phone size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span className="group-hover:text-white transition-colors">
                  {GMB.phone}
                </span>
              </a>
              <a
                href={`mailto:${GMB.email}`}
                className="flex items-center gap-3 text-sm group"
                style={{ color: "rgba(240,240,240,0.5)", cursor: "none" }}
              >
                <Mail size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span className="group-hover:text-white transition-colors">
                  {GMB.email}
                </span>
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: "rgba(240,240,240,0.5)" }}>
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
            color: "rgba(240,240,240,0.25)",
          }}
        >
          <span>
            © {year} {GMB.name}. All rights reserved.
          </span>
          <span style={{ color: "rgba(240,240,240,0.15)" }}>
            Built with Claude Code
          </span>
        </div>
      </div>
    </footer>
  );
}
