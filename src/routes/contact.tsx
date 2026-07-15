import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — London Furniture Studio" },
      { name: "description", content: "Enquire about a bespoke joinery commission with London Furniture Studio — Phoenix Way, Hurst, Reading." },
      { property: "og:title", content: "Contact — London Furniture Studio" },
      { property: "og:description", content: "Enquire about a bespoke commission." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-14 md:pt-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <div className="hairline hairline-before hairline-after mx-auto"><span className="eyebrow text-brass">Enquiries</span></div>
          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] text-forest md:text-[4rem]">Contact</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">We welcome enquiries from private clients, architects, interior designers and developers.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-28 md:px-10 md:pb-36">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow text-brass">Studio</p>
            <p className="mt-4 font-display text-2xl text-forest leading-tight">Phoenix Way<br />Hurst, Reading<br />United Kingdom</p>

            <div className="mt-10 space-y-4">
              <div>
                <p className="eyebrow text-brass">Email</p>
                <a href="mailto:studio@londonfurniturestudio.com" className="mt-2 block font-display text-xl text-forest hover:text-brass transition">studio@londonfurniturestudio.com</a>
              </div>
              <div>
                <p className="eyebrow text-brass">Telephone</p>
                <a href="tel:+441189000000" className="mt-2 block font-display text-xl text-forest hover:text-brass transition">+44 (0) 118 900 0000</a>
              </div>
              <div>
                <p className="eyebrow text-brass">Instagram</p>
                <a href="https://www.instagram.com/londonfurniturestudio/" target="_blank" rel="noreferrer" className="mt-2 block font-display text-xl text-forest hover:text-brass transition">@londonfurniturestudio</a>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }}>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-forest">Name</span>
              <input required className="border-b border-forest/30 bg-transparent py-2 outline-none focus:border-brass" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-forest">Email</span>
              <input required type="email" className="border-b border-forest/30 bg-transparent py-2 outline-none focus:border-brass" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-forest">Telephone</span>
              <input className="border-b border-forest/30 bg-transparent py-2 outline-none focus:border-brass" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-forest">Tell us about your project</span>
              <textarea rows={5} className="border-b border-forest/30 bg-transparent py-2 outline-none focus:border-brass resize-none" />
            </label>
            <div className="pt-4">
              <button type="submit" className="btn-brand btn-brand-hover">Send Enquiry</button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
