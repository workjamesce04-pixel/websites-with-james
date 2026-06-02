"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { GMB } from "@/lib/gmb-data";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "7e5d2048-d6ae-44c3-889e-4b8ebfa85d86",
          subject: "New enquiry — Websites With James",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      toast.success("Message sent! I'll be in touch shortly.", {
        style: { background: "#111", color: "#F5F0E8", border: "1px solid rgba(201,169,110,0.3)" },
        iconTheme: { primary: "var(--accent)", secondary: "#111" },
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Web3Forms error:", err);
      toast.error("Something went wrong. Please try again or email workjamesce04@gmail.com");
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "16px 20px",
    color: "var(--text)",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  const iconBoxStyle: React.CSSProperties = {
    background: "rgba(201,169,110,0.07)",
    border: "1px solid rgba(201,169,110,0.18)",
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 sm:px-8" style={{ background: "#0A0A0A" }}>
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest mb-5"
          style={{ color: "var(--accent)" }}
        >
          Get In Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif mb-20"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--text)",
          }}
        >
          Let's make your
          <br />
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
            phone ring.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                style={inputStyle}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                onFocus={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.45)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
              <input
                style={inputStyle}
                placeholder="Email address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                onFocus={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.45)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
            <input
              style={inputStyle}
              placeholder="Phone number (optional)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              onFocus={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.45)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
            <textarea
              style={{ ...inputStyle, resize: "none", height: "150px" }}
              placeholder="Tell me about your business and what you're looking for..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              onFocus={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.45)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-3 py-4 rounded-xl text-sm uppercase tracking-widest font-medium transition-all duration-300"
              style={{
                background: sending ? "rgba(201,169,110,0.5)" : "var(--accent)",
                color: "#0A0A0A",
                cursor: "none",
                boxShadow: "0 0 28px rgba(201,169,110,0.25)",
              }}
              onMouseEnter={(e) => {
                if (!sending) (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(201,169,110,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(201,169,110,0.25)";
              }}
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>

            <p className="text-xs" style={{ color: "var(--text-faint)" }}>
              Usually reply within a few hours.
            </p>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-5">
              <a
                href={`tel:${GMB.phoneTel}`}
                className="flex items-center gap-4 group"
                style={{ cursor: "none" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                  <Phone size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--text-faint)" }}>Phone</div>
                  <div className="text-sm transition-colors duration-200 group-hover:text-[var(--accent)]" style={{ color: "var(--text-muted)" }}>{GMB.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${GMB.email}`}
                className="flex items-center gap-4 group"
                style={{ cursor: "none" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                  <Mail size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--text-faint)" }}>Email</div>
                  <div className="text-sm transition-colors duration-200 group-hover:text-[var(--accent)]" style={{ color: "var(--text-muted)" }}>{GMB.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                  <MapPin size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--text-faint)" }}>Based</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>{GMB.address.full}</div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${GMB.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group mt-2"
                style={{ cursor: "none" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#25D366", flexShrink: 0 }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--text-faint)" }}>WhatsApp</div>
                  <div
                    className="text-sm transition-colors duration-200 group-hover:text-[#25D366]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message me directly
                  </div>
                </div>
              </a>
            </div>

            {/* Map embed */}
            <div
              className="rounded-2xl overflow-hidden flex-1 min-h-[240px]"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=${GMB.address.mapEmbedQuery}`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "240px",
                  filter: "grayscale(1) invert(1) brightness(0.85)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
