import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const slides = [
  { src: p1, title: "Belgravia Residence", meta: "Media Wall · Walnut & Brass" },
  { src: p2, title: "Marylebone Dressing Room", meta: "Fitted Wardrobe · Marble Island" },
  { src: p3, title: "Chelsea Library", meta: "Floor-to-ceiling Joinery" },
];

export function ProjectCarousel() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((prev) => (prev + n + slides.length) % slides.length);

  return (
    <div className="relative">
      <div className="grid gap-6 md:grid-cols-3">
        {slides.map((s, idx) => (
          <figure
            key={idx}
            className={`group relative overflow-hidden transition-all duration-700 ${
              idx === i ? "md:col-span-2 md:row-span-2" : ""
            }`}
            style={{ aspectRatio: idx === i ? "4 / 5" : "3 / 4" }}
            onMouseEnter={() => setI(idx)}
          >
            <img
              src={s.src}
              alt={s.title}
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/30 to-transparent p-6 pt-24">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brass">{s.meta}</p>
              <h4 className="mt-1 font-display text-xl text-ivory">{s.title}</h4>
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
