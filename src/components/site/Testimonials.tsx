const items = [
  {
    quote:
      "Extremely professional service, would definitely recommend and use again for anything bespoke!",
    author: "Private Client",
  },
  {
    quote:
      "Professional and excellent craftsmanship. Very pleased with all of the work completed! Our media unit is of a very high standard.",
    author: "Private Client",
  },
];

export function Testimonials() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <section className="overflow-hidden bg-background border-y border-forest/10">
      <div className="animate-marquee flex items-center py-8 whitespace-nowrap">
        {loop.map((t, i) => (
          <figure key={i} className="flex shrink-0 items-center gap-5 px-10">
            <span className="font-display text-3xl leading-none text-brass">&ldquo;</span>
            <blockquote className="font-display text-[1.2rem] leading-snug italic text-forest">
              {t.quote}
            </blockquote>
            <figcaption className="shrink-0 text-[0.65rem] uppercase tracking-[0.28em] text-forest/60">
              — {t.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
