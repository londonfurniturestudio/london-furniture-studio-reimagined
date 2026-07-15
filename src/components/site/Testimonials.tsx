const items = [
  {
    quote:
      "The craftsmanship is exceptional. Every detail — from the veneer match to the brass inlay — was executed to a standard I've rarely seen.",
    author: "Interior Designer, Chelsea",
  },
  {
    quote:
      "A rare studio that treats bespoke as a discipline, not a marketing word. Our clients are consistently delighted.",
    author: "Architect, Marylebone",
  },
  {
    quote:
      "Impeccable joinery, unhurried process, and a team that genuinely cares. They have become our first call for every project.",
    author: "Developer, Notting Hill",
  },
  {
    quote:
      "The finish quality is on another level. Timeless work that elevates the entire home.",
    author: "Private Client, Belgravia",
  },
];

export function Testimonials() {
  const loop = [...items, ...items];
  return (
    <section className="overflow-hidden bg-background">
      <div className="animate-marquee flex items-center gap-14 py-6 whitespace-nowrap">
        {loop.map((t, i) => (
          <figure key={i} className="flex items-center gap-4 whitespace-normal px-4">
            <span className="font-display text-2xl leading-none text-forest">&ldquo;</span>
            <blockquote className="font-display text-[1.15rem] leading-snug italic text-forest max-w-[520px]">
              {t.quote}
            </blockquote>
            <figcaption className="shrink-0 text-[0.65rem] uppercase tracking-[0.28em] text-forest/70">
              — {t.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
