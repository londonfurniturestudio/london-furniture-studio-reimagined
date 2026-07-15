import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-office.jpg.asset.json";
import feature from "@/assets/feature-kitchen.jpg";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — London Furniture Studio" },
      { name: "description", content: "Meet the team behind London Furniture Studio — a Berkshire workshop of makers, designers and finishers dedicated to bespoke joinery." },
      { property: "og:title", content: "Who We Are — London Furniture Studio" },
      { property: "og:description", content: "A workshop of makers, designers and finishers." },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: WhoWeAre,
});

function WhoWeAre() {
  return (
    <SiteLayout>
      <section className="relative h-[62svh] min-h-[440px] w-full overflow-hidden">
        <img src={heroImg.url} alt="LFS workshop" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,42,40,0.5), rgba(20,42,40,0.75))" }} />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-6 pt-16 text-center text-ivory md:px-10">
          <p className="eyebrow text-brass">The Studio</p>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] md:text-[4.5rem]">Who We Are</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-24 md:px-10 md:py-32">
        <div className="hairline hairline-before mx-auto"><span className="eyebrow text-brass">Our Story</span></div>
        <p className="mt-10 font-display text-[1.6rem] leading-[1.4] text-forest md:text-[2rem]">
          London Furniture Studio was founded on a simple belief — that great cabinetry is made slowly, by hand, by people who genuinely love the material.
        </p>
        <div className="mt-10 grid gap-8 text-muted-foreground md:grid-cols-2">
          <p>From our workshop in Hurst, Berkshire, we design and hand-build bespoke joinery for private clients, developers, architects and interior designers. Every commission is drawn, made and finished under one roof — a rare thing, and the reason our work carries the coherence it does.</p>
          <p>Our small team includes designers, cabinetmakers, veneer specialists and finishers, each with a decade or more of experience with the very best of London's residential projects. We take on a limited number of commissions each year so that every project receives the attention it deserves.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        <img src={feature} alt="LFS craftsmanship" loading="lazy" width={1600} height={1000} className="h-[520px] w-full object-cover md:h-[640px]" />
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-28 text-center md:px-10 md:pb-36">
        <h2 className="font-display text-[2rem] text-forest md:text-[2.75rem]">Ready to begin?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">We welcome enquiries from private clients and design professionals alike.</p>
        <div className="mt-10"><Link to="/contact" className="btn-brand btn-brand-hover">Start a Project</Link></div>
      </section>
    </SiteLayout>
  );
}
