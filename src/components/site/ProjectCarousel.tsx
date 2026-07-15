import { useMemo, useState } from "react";
import { projectItems } from "./project-data";

export function ProjectCarousel() {
  const [start, setStart] = useState(0);
  const total = projectItems.length;

  const visibleSlides = useMemo(
    () => Array.from({ length: Math.min(3, total) }, (_, idx) => projectItems[(start + idx) % total]),
    [start, total],
  );

  const go = (direction: number) => setStart((prev) => (prev + direction + total) % total);

  return (
    <div className="relative">
      <div className="grid gap-6 md:grid-cols-3">
        {visibleSlides.map((slide, idx) => {
          const featured = idx === 0;
          return (
            <figure
              key={`${slide.title}-${slide.src}`}
              className={`group relative overflow-hidden transition-all duration-700 ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ aspectRatio: featured ? "4 / 5" : "3 / 4" }}
            >
              <img
                src={slide.src}
                alt={slide.title}
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/30 to-transparent p-6 pt-24">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brass">{slide.meta}</p>
                <h4 className="mt-1 font-display text-xl text-ivory">{slide.title}</h4>
                {slide.location ? <p className="mt-2 text-sm text-ivory/80">{slide.location}</p> : null}
              </div>
            </figure>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {projectItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStart(idx)}
              aria-label={`Project ${idx + 1}`}
              className="h-[2px] w-10 transition-colors"
              style={{ backgroundColor: idx === start ? "var(--color-brass)" : "rgba(0,0,0,0.15)" }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous" className="border border-foreground/20 p-3 transition hover:border-brass hover:text-brass">
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>
          </button>
          <button onClick={() => go(1)} aria-label="Next" className="border border-foreground/20 p-3 transition hover:border-brass hover:text-brass">
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
