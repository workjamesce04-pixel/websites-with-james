"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { GMB } from "@/lib/gmb-data";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: "7e5d2048-d6ae-44c3-889e-4b8ebfa85d86", subject: `New enquiry from ${form.name}`, ...form }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      router.push("/thank-you");
    } catch {
      toast.error("Something went wrong. Email james@websiteswithjames.co.uk directly.");
    } finally { setSending(false); }
  };

  const field: React.CSSProperties = {
    width: "100%", borderRadius: 12, padding: "14px 16px",
    border: "1px solid var(--border)", background: "var(--bg-secondary)",
    color: "var(--text)", fontSize: 15, outline: "none",
    fontFamily: "var(--font-inter), Inter, sans-serif",
    transition: "border-color 0.15s",
  };

  const contacts = [
    { icon: Phone, label: "Phone", value: GMB.phone, href: `tel:${GMB.phoneTel}` },
    { icon: Mail, label: "Email", value: GMB.email, href: `mailto:${GMB.email}` },
    { icon: MapPin, label: "Based", value: GMB.address.full, href: `https://maps.google.com/?q=${GMB.address.mapEmbedQuery}` },
  ];

  return (
    <section id="contact" className="contact-section" style={{ background: "#fff", padding: "8vw 0 9vw" }}>
      <Toaster position="top-right" />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5vw" }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "5.5vw" }}
        >
          <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 12 }}>Contact</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, color: "var(--text)", marginBottom: 16 }}>
            Let&apos;s make your<br />
            <span style={{ color: "var(--accent)" }}>phone ring.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto" }}>
            Tell me about your business. I&apos;ll give you an honest view of what you need — no fluff, no hard sell.
          </p>
        </motion.div>

        {/* Two-col layout */}
        <div className="contact-grid" style={{ display: "grid", gap: "4vw" }}>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <div className="contact-name-email" style={{ display: "grid", gap: 12 }}>
              <input style={field} placeholder="Your name" value={form.name} required
                onChange={e => setForm({ ...form, name: e.target.value })}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")} />
              <input style={field} placeholder="Email" type="email" value={form.email} required
                onChange={e => setForm({ ...form, email: e.target.value })}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            </div>
            <input style={field} placeholder="Phone (optional)" value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              onFocus={e => (e.target.style.borderColor = "var(--accent)")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            <textarea style={{ ...field, resize: "none", height: 140 }}
              placeholder="Tell me about your business and what you need..."
              value={form.message} required
              onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={e => (e.target.style.borderColor = "var(--accent)")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            <button type="submit" disabled={sending} style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "15px 24px", borderRadius: 12, border: "none",
              background: sending ? "rgba(0,102,204,0.5)" : "var(--accent)",
              color: "#fff", fontSize: 15, fontWeight: 500, cursor: sending ? "default" : "pointer",
              transition: "background 0.2s",
            }}>
              <Send size={15} />{sending ? "Sending..." : "Send Message"}
            </button>
            <p style={{ fontSize: 13, color: "var(--text-3)", textAlign: "center" }}>Usually reply same day.</p>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {/* Contact links */}
            {contacts.map((c) => (
              <a key={c.label} href={c.href}
                target={c.label === "Based" ? "_blank" : undefined}
                rel={c.label === "Based" ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "16px 20px", borderRadius: 14,
                  background: "var(--bg-secondary)",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#e8e8ed")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)")}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                }}>
                  <c.icon size={15} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 3 }}>{c.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{c.value}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a href={`https://wa.me/${GMB.whatsapp}?text=Hi%20James%2C%20I%27d%20like%20to%20discuss%20a%20website.`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px", borderRadius: 14,
                background: "rgba(37,211,102,0.07)",
                border: "1px solid rgba(37,211,102,0.2)",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.12)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.07)")}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#25D366" }}>WhatsApp James</div>
                <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 2 }}>Usually reply within the hour</div>
              </div>
            </a>

            {/* Availability */}
            <div style={{
              padding: "16px 20px", borderRadius: 14,
              background: "var(--bg-secondary)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#16a34a" }}>Currently accepting new clients</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-3)", lineHeight: 1.6 }}>
                Limited slots — I work with a small number of businesses at a time to keep quality high.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
