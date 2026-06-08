"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GMB } from "@/lib/gmb-data";

const links = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#gallery" },
  { label: "Reviews",  href: "#reviews" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[48px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo/svg/logo-navbar.svg"
              alt="Websites With James"
              width={420}
              height={80}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop links — centered */}
          <ul className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 text-sm font-medium transition-colors duration-150"
            style={{ color: "var(--accent)", fontSize: "13px" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-hover)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
          >
            Get a free audit →
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block w-5 h-px bg-[var(--text)] transition-all duration-200"
              style={{ transform: open ? "rotate(45deg) translate(2px,2px)" : "none" }} />
            <span className="block w-5 h-px bg-[var(--text)] transition-all duration-200"
              style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-px bg-[var(--text)] transition-all duration-200"
              style={{ transform: open ? "rotate(-45deg) translate(2px,-2px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col pt-16"
            style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col px-6 pt-8 gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-semibold py-3 border-b"
                  style={{ color: "var(--text)", borderColor: "var(--border)", letterSpacing: "-0.02em" }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div className="px-6 mt-8 flex flex-col gap-3">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center py-4 text-base rounded-2xl">
                Get a Free Audit
              </a>
              <a href={`tel:${GMB.phoneTel}`} onClick={() => setOpen(false)} className="btn-secondary justify-center py-4 text-base rounded-2xl">
                {GMB.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
