"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80", alt: "Web design workspace", aspect: "tall" },
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", alt: "Laptop with code", aspect: "wide" },
  { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80", alt: "Mobile design", aspect: "square" },
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", alt: "Analytics dashboard", aspect: "wide" },
  { src: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80", alt: "Design tools", aspect: "square" },
  { src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80", alt: "Creative workspace", aspect: "tall" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((l) =>
      l !== null ? (l - 1 + images.length) % images.length : null
    );
  const next = () =>
    setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  return (
    <section
      id="gallery"
      className="py-24 md:py-36"
      style={{ background: "#080808" }}
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "var(--accent)" }}
        >
          Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif mb-14"
          style={{
            fontSize: "clamp(38px, 6vw, 72px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          Built to impress.
          <br />
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
            Designed to convert.
          </span>
        </motion.h2>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group relative"
              onClick={() => setLightbox(i)}
              style={{ cursor: "none" }}
            >
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  height: img.aspect === "tall" ? "400px" : img.aspect === "wide" ? "220px" : "300px",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="text-xs uppercase tracking-widest px-4 py-2 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      border: "1px solid rgba(0,212,255,0.4)",
                      color: "var(--accent)",
                    }}
                  >
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full glass"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              style={{ cursor: "none" }}
            >
              <X size={20} />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full glass"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              style={{ cursor: "none" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full glass"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              style={{ cursor: "none" }}
            >
              <ChevronRight size={20} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              style={{ maxHeight: "80vh", aspectRatio: "16/10" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
