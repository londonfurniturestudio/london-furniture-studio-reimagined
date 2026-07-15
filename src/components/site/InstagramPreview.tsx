import { instagramPreviewItems } from "./project-data";

export function InstagramPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <div className="mb-14 text-center">
        <div className="hairline hairline-before hairline-after mx-auto">
          <span className="eyebrow text-brass">Social</span>
        </div>
        <h2 className="mt-6 font-display text-[2rem] text-forest md:text-[3rem]">Recently at LFS</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A live Instagram feed will sit here once the account is connected. For now, tap through to Instagram to see the latest work.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {instagramPreviewItems.map((item) => (
          <a
            key={`${item.title}-${item.src}`}
            href="https://www.instagram.com/londonfurniturestudio/"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden"
            aria-label={`View ${item.title} on Instagram`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={item.src}
                alt={`${item.title} by London Furniture Studio`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-brass">Instagram</p>
                <h3 className="mt-2 font-display text-xl text-ivory">{item.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
