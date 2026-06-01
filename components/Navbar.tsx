"use client";
import { useEffect, useState } from "react";
import { GMB } from "@/lib/gmb-data";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="text-white font-semibold tracking-tight text-sm uppercase"
          style={{ letterSpacing: "0.15em", cursor: "none" }}
        >
          <span style={{ color: "var(--accent)" }}>W</span>ebsites
          <span className="text-white/40 mx-1">·</span>
          <span style={{ color: "var(--accent)" }}>W</span>ith James
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-200"
                style={{ cursor: "none" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${GMB.phoneTel}`}
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300"
          style={{
            borderColor: "var(--accent)",
            color: "var(--accent)",
            cursor: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--accent)";
            (e.currentTarget as HTMLElement).style.color = "#080808";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--accent)";
          }}
        >
          Call Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ cursor: "none" }}
        >
          <span
            className={`block w-6 h-px bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-white/70"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${GMB.phoneTel}`}
            className="text-sm uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            {GMB.phone}
          </a>
        </div>
      )}
    </nav>
  );
}
