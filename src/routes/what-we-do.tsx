import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/feature-kitchen.jpg";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — London Furniture Studio" },
      { name: "description", content: "From concept to hand-finished install — the London Furniture Studio process for bespoke joinery and fitted cabinetry." },
      { property: "og:title", content: "What We Do — London Furniture Studio" },
      { property: "og:description", content: "Our process, from first sketch to final install." },
    ],
  }),
  component: WhatWeDo,
});

const steps = [
  { n: "01", title: "Consultation", copy: "We begin with an unhurried conversation — on site, in the studio, or with your design team — to understand the space, the brief and the ambition." },
  { n: "02", title: "Design & Drawing", copy: "Our designers develop bespoke drawings, material palettes and full-size samples. Nothing enters the workshop until every detail is resolved." },
  { n: "03", title: "Making", copy: "In our Berkshire workshop, cabinetmakers, veneer specialists and finishers hand-build every piece. We work primarily in solid timber, veneered panels, brass, stone and leather." },
  { n: "04", title: "Finishing", copy: "Each surface is hand-finished in-house — a process no machine can replicate. It is what gives our work its quiet, tactile depth." },
  { n: "05", title: "Installation", copy: "Our own installers fit every commission personally. We handle site protection, coordination with trades and final adjustments." },
  { n: "06", title: "Aftercare", copy: "We stand behind our work. Every piece is documented and supported for the long life it is built to have." },
];

function WhatWeDo() {
  return (
    <SiteLayout>
      <section className="relative h-[62svh] min-h-[440px] w-full overflow-hidden">
        <img src={heroImg} alt="LFS process" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,42,40,0.5), rgba(20,42,40,0.75))" }} />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-6 pt-16 text-center text-ivory md:px-10">
          <p className="eyebrow text-brass">Our Process</p>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] md:text-[4.5rem]">What We Do</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {steps.map((s) => (
            <article key={s.n} className="flex gap-6">
              <span className="font-display text-4xl text-brass leading-none">{s.n}</span>
              <div>
                <h3 className="font-display text-2xl text-forest">{s.title}</h3>
                <div className="mt-2 h-px w-10 bg-brass" />
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/projects" className="btn-brand btn-brand-hover">View Recent Projects</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
