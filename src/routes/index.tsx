import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Testimonials } from "@/components/site/Testimonials";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import { HeroMedia } from "@/components/site/HeroMedia";

import heroStill from "@/assets/hero-still.jpg";
import tileCommercial from "@/assets/tile-commercial.jpg";
import tileArchitects from "@/assets/tile-architects.jpg";
import tileResidential from "@/assets/tile-residential.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "London Furniture Studio — Bespoke Joinery & Fine Cabinetry" },
      {
        name: "description",
        content:
          "London Furniture Studio designs and handcrafts bespoke joinery for the finest homes and developments in Chelsea, Marylebone, Belgravia and beyond.",
      },
      { property: "og:title", content: "London Furniture Studio — Bespoke Joinery & Fine Cabinetry" },
      {
        property: "og:description",
        content: "Handcrafted cabinetry and joinery for the world's finest interiors.",
      },
      { property: "og:image", content: heroStill },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroStill },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <HeroMedia video alt="Bespoke walnut library and study by London Furniture Studio" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,42,40,0.45) 0%, rgba(20,42,40,0.2) 40%, rgba(20,42,40,0.7) 100%)" }} />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-6 text-center md:px-10">
          <p className="animate-fade-up text-[0.8rem] uppercase tracking-[0.42em] md:text-[0.95rem]" style={{ color: "var(--color-brass)" }}>
            London Furniture Studio
          </p>
          <h1 className="mt-6 max-w-4xl animate-fade-up font-display text-[2.2rem] leading-[1.1] md:text-[4rem]" style={{ color: "var(--color-brass-soft, #d9b483)", animationDelay: "120ms" }}>
            Cabinetry <em className="italic">crafted</em> for the finest interiors.
          </h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "260ms" }}>
            <a href="https://www.instagram.com/londonfurniturestudio/" target="_blank" rel="noreferrer" className="btn-brand-solid btn-brand-solid-hover">
              View Our Work
            </a>
            <Link to="/contact" className="btn-brand btn-brand-hover text-ivory">Start a Project</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/60">
          <svg width="18" height="30" viewBox="0 0 18 30" fill="none"><rect x="1" y="1" width="16" height="28" rx="8" stroke="currentColor" /><circle cx="9" cy="9" r="1.5" fill="currentColor"><animate attributeName="cy" from="9" to="20" dur="1.8s" repeatCount="indefinite" /></circle></svg>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pt-28 pb-16 text-center md:px-10 md:pt-36 md:pb-20">
        <div className="hairline hairline-before hairline-after mx-auto">
          <span className="eyebrow text-brass">The Studio</span>
        </div>
        <h2 className="mx-auto mt-8 max-w-3xl font-display text-[2rem] leading-[1.15] text-forest md:text-[3rem]">
          Quiet, uncompromising craftsmanship — from first sketch to final hand-polish.
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            London Furniture Studio is a bespoke cabinetry and furniture manufacturer specialising in designing and handcrafting all varieties of furniture in the residential and commercial market. With the combined experience of over 30 years in Fine Furniture, we can proudly offer a truly beautiful and long-lasting product.
          </p>
          <p>
            We offer all forms of furniture and cabinetry, including Walk-in Closets, Fitted Wardrobes, Dressing Rooms, Bespoke Kitchens, Media Rooms, Living Rooms, Bathrooms and unique Freestanding Pieces. Our range of materials stem from man-made boards like veneered MDF and Melamine to Fine Timber, Brass and Mirror/Glass.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/who-we-are" className="btn-brand btn-brand-hover">Meet the Team</Link>
        </div>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-[1400px] px-6 pt-28 pb-16 md:px-10 md:pt-36 md:pb-20">
        <div className="mb-14 text-center">
          <div className="hairline hairline-before hairline-after mx-auto">
            <span className="eyebrow text-brass">Collaborations</span>
          </div>
          <h2 className="mt-6 font-display text-[2rem] text-forest md:text-[3rem]">Who We Work With</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { img: tileCommercial, title: "Commercial", copy: "Hospitality, retail and workplace joinery delivered to programme." },
            { img: tileArchitects, title: "Architects & Interior Designers", copy: "A trusted maker for design-led practices across London." },
            { img: tileResidential, title: "Residential", copy: "Private commissions for the finest London homes." },
          ].map((t) => (
            <article key={t.title} className="group relative overflow-hidden">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img src={t.img} alt={t.title} loading="lazy" width={1000} height={1200} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,42,40,0.15) 0%, rgba(20,42,40,0.85) 100%)" }} />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl text-ivory">{t.title}</h3>
                  <div className="mt-2 h-px w-10 bg-brass" />
                  <p className="mt-3 text-sm leading-relaxed text-ivory/80">{t.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/what-we-do" className="btn-brand btn-brand-hover">How We Work</Link>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-secondary)" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="hairline hairline-before hairline-after">
              <span className="eyebrow text-brass">Selected Work</span>
            </div>
            <h2 className="mt-6 font-display text-[2rem] text-forest md:text-[3rem]">Recent Projects</h2>
          </div>

          <ProjectCarousel />

          <div className="mt-14 text-center">
            <Link to="/projects" className="btn-brand btn-brand-hover">See More</Link>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
