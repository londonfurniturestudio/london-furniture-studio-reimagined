import { useState } from "react";
import p1 from "@/assets/proj-library.jpg";
import p2 from "@/assets/proj-kitchen.jpg";
import p3 from "@/assets/proj-wardrobe.jpg";
import p4 from "@/assets/proj-shelving.jpg";
import p5 from "@/assets/proj-media.jpg";

const slides = [
  { src: p1, title: "Walnut Library & Study", meta: "Residential · Library" },
  { src: p2, title: "Kensington Kitchen", meta: "Residential · Kitchen" },
  { src: p3, title: "Bespoke Dressing Room", meta: "Residential · Wardrobe" },
  { src: p4, title: "Illuminated Oak Shelving", meta: "Residential · Living" },
  { src: p5, title: "Marquetry Media Unit", meta: "Residential · Media" },
];

export function ProjectCarousel() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((prev) => (prev + n + slides.length) % slides.length);

  return (
    <div className="relative">
      <div className="grid gap-6 md:grid-cols-3">
        {slides.slice(0, 3).map((s, idx) => (
          <figure
            key={idx}
            className={`group relative overflow-hidden transition-all duration-700 ${
              idx === i % 3 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            style={{ aspectRatio: idx === i % 3 ? "4 / 5" : "3 / 4" }}
            onMouseEnter={() => setI(idx)}
          >
            <img
              src={slides[(idx + Math.floor(i / 3) * 3) % slides.length].src}
              alt={slides[(idx + Math.floor(i / 3) * 3) % slides.length].title}
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/30 to-transparent p-6 pt-24">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brass">{slides[(idx + Math.floor(i / 3) * 3) % slides.length].meta}</p>
              <h4 className="mt-1 font-display text-xl text-ivory">{slides[(idx + Math.floor(i / 3) * 3) % slides.length].title}</h4>
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Project ${idx + 1}`}
              className="h-[2px] w-10 transition-colors"
              style={{ backgroundColor: idx === i ? "var(--color-brass)" : "rgba(0,0,0,0.15)" }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous" className="border border-foreground/20 p-3 hover:border-brass hover:text-brass transition">
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>
          </button>
          <button onClick={() => go(1)} aria-label="Next" className="border border-foreground/20 p-3 hover:border-brass hover:text-brass transition">
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
