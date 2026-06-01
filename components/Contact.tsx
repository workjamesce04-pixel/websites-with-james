"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { GMB } from "@/lib/gmb-data";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_r5x79ko",
        "template_esy9n2k",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "vIElErH48C1hX17BD"
      );
      toast.success("Message sent! I'll be in touch shortly.", {
        style: { background: "#111", color: "#f0f0f0", border: "1px solid rgba(0,212,255,0.3)" },
        iconTheme: { primary: "var(--accent)", secondary: "#111" },
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Something went wrong. Please try again or email hello@websiteswithjames.co.uk");
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "14px 18px",
    color: "#f0f0f0",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36"
      style={{ background: "#0d0d0d" }}
    >
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "var(--accent)" }}
        >
          Get In Touch
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif mb-16"
          style={{
            fontSize: "clamp(38px, 6vw, 72px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
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
            initial={{ opacity: 0, x: -30 }}
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
                onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
              <input
                style={inputStyle}
                placeholder="Email address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
            <input
              style={inputStyle}
              placeholder="Phone number (optional)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
            <textarea
              style={{ ...inputStyle, resize: "none", height: "140px" }}
              placeholder="Tell me about your business and what you're looking for..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-3 py-4 rounded-xl text-sm uppercase tracking-widest font-medium transition-all duration-300"
              style={{
                background: sending ? "rgba(0,212,255,0.5)" : "var(--accent)",
                color: "#080808",
                cursor: "none",
                boxShadow: "0 0 30px rgba(0,212,255,0.25)",
              }}
              onMouseEnter={(e) => {
                if (!sending) (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(0,212,255,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,212,255,0.25)";
              }}
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>

            <p className="text-xs" style={{ color: "rgba(240,240,240,0.25)" }}>
              {/* To activate: replace keys in Contact.tsx with your EmailJS credentials */}
              Usually reply within a few hours.
            </p>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.15)",
                  }}
                >
                  <Phone size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(240,240,240,0.35)" }}>Phone</div>
                  <div className="text-sm group-hover:text-[var(--accent)] transition-colors">{GMB.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${GMB.email}`}
                className="flex items-center gap-4 group"
                style={{ cursor: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.15)",
                  }}
                >
                  <Mail size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(240,240,240,0.35)" }}>Email</div>
                  <div className="text-sm group-hover:text-[var(--accent)] transition-colors">{GMB.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.15)",
                  }}
                >
                  <MapPin size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(240,240,240,0.35)" }}>Address</div>
                  <div className="text-sm">{GMB.address.full}</div>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden flex-1 min-h-[240px]" style={{ border: "1px solid var(--border)" }}>
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3Kgs&q=${GMB.address.mapEmbedQuery}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "240px", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${GMB.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: "#25D366",
          cursor: "none",
          boxShadow: "0 0 0 0 rgba(37,211,102,0.5)",
          animation: "whatsapp-pulse 2s infinite",
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <style>{`
          @keyframes whatsapp-pulse {
            0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
            70% { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
            100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
          }
        `}</style>
      </a>
    </section>
  );
}
