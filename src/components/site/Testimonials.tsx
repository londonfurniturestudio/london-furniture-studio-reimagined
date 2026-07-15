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
    <section
      className="overflow-hidden border-y"
      style={{
        backgroundColor: "var(--color-forest)",
        borderColor: "rgba(201,168,128,0.18)",
      }}
    >
      <div className="animate-marquee flex gap-16 py-16 whitespace-nowrap">
        {loop.map((t, i) => (
          <figure key={i} className="flex min-w-[520px] max-w-[560px] flex-col items-start whitespace-normal px-8">
            <span className="text-brass text-3xl font-display leading-none">&ldquo;</span>
            <blockquote className="font-display text-[1.35rem] leading-snug text-ivory/95 italic">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 text-[0.7rem] uppercase tracking-[0.28em] text-brass">
              — {t.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
