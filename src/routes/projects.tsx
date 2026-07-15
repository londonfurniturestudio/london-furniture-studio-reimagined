import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { projectItems } from "@/components/site/project-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — London Furniture Studio" },
      { name: "description", content: "Selected bespoke joinery projects from London Furniture Studio across London, Fulham, Kensington and St Georges Hill." },
      { property: "og:title", content: "Projects — London Furniture Studio" },
      { property: "og:description", content: "Selected bespoke joinery from LFS." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-14 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <div className="hairline hairline-before hairline-after mx-auto"><span className="eyebrow text-brass">Portfolio</span></div>
          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] text-forest md:text-[4rem]">Projects</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">A selection of recent commissions from London and the South East.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-36">
        <div className="grid gap-4 md:grid-cols-2">
          {projectItems.map((project, i) => (
            <figure key={`${project.title}-${i}`} className={`group relative overflow-hidden ${project.size === "tall" ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
              <img src={project.src} alt={project.title} loading="lazy" width={1200} height={1500} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(20,42,40,0.85))" }} />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-7 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brass">{project.meta}</p>
                <h3 className="mt-1 font-display text-2xl text-ivory">{project.title}</h3>
                {project.location ? <p className="mt-2 text-sm text-ivory/80">{project.location}</p> : null}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact" className="btn-brand btn-brand-hover">Discuss Your Project</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
