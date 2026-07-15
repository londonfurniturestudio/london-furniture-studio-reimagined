import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import projMedia from "@/assets/proj-media.jpg.asset.json";
import projKitchen from "@/assets/proj-kitchen.jpg.asset.json";
import projWardrobe from "@/assets/proj-wardrobe.jpg.asset.json";
import projLibrary from "@/assets/proj-library.jpg.asset.json";
import projShelving from "@/assets/proj-shelving.jpg.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — London Furniture Studio" },
      { name: "description", content: "Selected bespoke joinery projects from London Furniture Studio across Chelsea, Marylebone, Belgravia and beyond." },
      { property: "og:title", content: "Projects — London Furniture Studio" },
      { property: "og:description", content: "Selected bespoke joinery from LFS." },
      { property: "og:image", content: projLibrary.url },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: projLibrary.url, title: "Walnut Library & Study", cat: "Residential · Library", size: "tall" },
  { img: projKitchen.url, title: "Kensington Kitchen", cat: "Residential · Kitchen", size: "wide" },
  { img: projWardrobe.url, title: "Bespoke Dressing Room", cat: "Residential · Wardrobe", size: "tall" },
  { img: projShelving.url, title: "Illuminated Oak Shelving", cat: "Residential · Living", size: "wide" },
  { img: projMedia.url, title: "Marquetry Media Unit", cat: "Residential · Media", size: "tall" },
];

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
          {projects.map((p, i) => (
            <figure key={i} className={`group relative overflow-hidden ${p.size === "tall" ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
              <img src={p.img} alt={p.title} loading="lazy" width={1200} height={1500} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(20,42,40,0.85))" }} />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-7 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brass">{p.cat}</p>
                <h3 className="mt-1 font-display text-2xl text-ivory">{p.title}</h3>
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
