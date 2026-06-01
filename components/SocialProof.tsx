"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import { GMB } from "@/lib/gmb-data";

function ReviewCard({ review }: { review: (typeof GMB.reviews)[number] }) {
  return (
    <div
      className="glass rounded-2xl p-6 mx-3 w-72 flex-shrink-0"
      style={{ cursor: "none" }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill="var(--accent)"
            style={{ color: "var(--accent)" }}
          />
        ))}
      </div>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "rgba(240,240,240,0.7)" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
          style={{ background: "var(--accent)", color: "#080808" }}
        >
          {review.name[0]}
        </div>
        <div>
          <div className="text-xs font-medium">{review.name}</div>
          <div className="text-xs" style={{ color: "rgba(240,240,240,0.35)" }}>
            {review.date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      className="py-24 md:py-36 overflow-hidden"
      style={{
        background: "#0a0a0a",
      }}
    >
      {/* Radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-16" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16">
          {/* Giant rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="font-serif leading-none"
              style={{
                fontSize: "clamp(100px, 18vw, 200px)",
                fontWeight: 300,
                color: "var(--accent)",
                textShadow:
                  "0 0 80px rgba(0,212,255,0.3), 0 0 160px rgba(0,212,255,0.1)",
              }}
            >
              {GMB.rating}
            </div>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={20}
                  fill="var(--accent)"
                  style={{ color: "var(--accent)" }}
                />
              ))}
            </div>
            <div
              className="text-xs uppercase tracking-widest mt-3"
              style={{ color: "rgba(240,240,240,0.4)" }}
            >
              On Google · Perfect Score
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
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
                fontSize: "clamp(32px, 5vw, 60px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Results speak
              <br />
              <span style={{ fontStyle: "italic" }}>louder than pitches.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee speed={35} pauseOnHover gradient={false}>
        {[...GMB.reviews, ...GMB.reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </Marquee>
    </section>
  );
}
