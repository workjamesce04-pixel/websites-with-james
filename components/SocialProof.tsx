"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { GMB } from "@/lib/gmb-data";

type Review = (typeof GMB.reviews)[number] & { business?: string };

function ReviewCard({ review, index, inView }: { review: Review; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
      className="flex flex-col"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
        borderTop: "2px solid var(--accent)",
        borderRadius: "16px",
        padding: "2.5rem",
      }}
    >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={14} fill="var(--accent)" style={{ color: "var(--accent)" }} />
        ))}
      </div>

      <p
        className="text-base flex-1 mb-8"
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.75,
          fontStyle: "italic",
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
          style={{ background: "var(--accent)", color: "#0A0A0A" }}
        >
          {review.name[0]}
        </div>
        <div>
          <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
            {review.name}
          </div>
          {review.business && (
            <div className="text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
              {review.business}
            </div>
          )}
        </div>
        <div className="ml-auto text-xs" style={{ color: "var(--text-faint)" }}>
          {review.date}
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      className="py-24 md:py-36 px-6 sm:px-8"
      style={{ background: "#0D0D0D" }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end gap-10 mb-16">
          {/* Giant rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <div
              className="font-serif leading-none"
              style={{
                fontSize: "clamp(88px, 14vw, 160px)",
                fontWeight: 600,
                color: "var(--accent)",
                textShadow: "0 0 60px rgba(201,169,110,0.2)",
              }}
            >
              {GMB.rating}
            </div>
            <div className="flex gap-1.5 mt-3">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} size={18} fill="var(--accent)" style={{ color: "var(--accent)" }} />
              ))}
            </div>
            <div
              className="text-xs uppercase tracking-widest mt-3"
              style={{ color: "var(--text-faint)" }}
            >
              Google Rating · Perfect Score
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="md:pb-3"
          >
            <div
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              What Clients Say
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(34px, 5vw, 60px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--text)",
              }}
            >
              Results speak
              <br />
              <span style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
                louder than pitches.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(GMB.reviews as unknown as Review[]).map((review, i) => (
            <ReviewCard key={i} review={review} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
