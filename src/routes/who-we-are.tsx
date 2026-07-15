import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-still.jpg";
import maxCam from "@/assets/max-cam.jpg";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — London Furniture Studio" },
      { name: "description", content: "Meet the team behind London Furniture Studio — a Berkshire workshop of makers, designers and finishers dedicated to bespoke joinery." },
      { property: "og:title", content: "Who We Are — London Furniture Studio" },
      { property: "og:description", content: "A workshop of makers, designers and finishers." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: WhoWeAre,
});

function WhoWeAre() {
  return (
    <SiteLayout>
      <section className="relative h-[62svh] min-h-[440px] w-full overflow-hidden">
        <img src={heroImg} alt="LFS workshop" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,42,40,0.5), rgba(20,42,40,0.75))" }} />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-6 pt-16 text-center text-ivory md:px-10">
          <p className="eyebrow text-brass">The Studio</p>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] md:text-[4.5rem]">A studio built on craft.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-24 md:px-10 md:py-32">
        <div className="hairline hairline-before mx-auto"><span className="eyebrow text-brass">Our Story</span></div>
        <p className="mt-10 font-display text-[1.6rem] leading-[1.4] text-forest md:text-[2rem]">
          London Furniture Studio was founded by Max and Cam in 2021, two highly experienced carpenters united by a shared passion for precision and the timeless beauty of raw materials.
        </p>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>Driven by the belief that furniture should be both sculptural and functional, they established the studio to bring a refined, bespoke approach to contemporary interiors.</p>
          <p>Today, London Furniture Studio is a small, highly specialised team of master carpenters and cabinet makers. We design, build, and fit exceptional, high-end bespoke units for premium residential and commercial projects.</p>
          <p>For us, luxury lies in the details. From the initial hand-drawn concept to the final, seamless installation, we work closely with discerning clients, architects, and designers who demand uncompromising quality. Our aesthetic is clean, elegant, and understated — celebrating minimalist lines, rich textures, and superior craftsmanship.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10 md:pb-32">
        <figure>
          <img src={maxCam} alt="Max and Cam, founders of London Furniture Studio" loading="lazy" className="h-[520px] w-full object-cover md:h-[720px]" />
          <figcaption className="mt-4 text-center text-[0.68rem] uppercase tracking-[0.28em] text-brass">Max &amp; Cam — Founders</figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-28 text-center md:px-10 md:pb-36">
        <h2 className="font-display text-[2rem] text-forest md:text-[2.75rem]">Ready to begin?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">We welcome enquiries from private clients and design professionals alike.</p>
        <div className="mt-10"><Link to="/contact" className="btn-brand btn-brand-hover">Start a Project</Link></div>
      </section>
    </SiteLayout>
  );
}
