import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-forest-deep)", color: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-display text-4xl text-ivory tracking-[0.14em]">LFS</div>
            <div className="mt-3 text-[0.62rem] uppercase tracking-[0.32em] text-brass">London Furniture Studio</div>
            <div className="mt-6 h-px w-14 bg-brass" />
            <p className="mt-6 text-sm leading-relaxed text-ivory/70 max-w-[240px]">Bespoke joinery for London's finest homes and developments.</p>
          </div>

          <div>
            <p className="eyebrow text-brass mb-4">Studio</p>
            <address className="not-italic text-sm leading-relaxed text-ivory/80">
              Phoenix Way<br />
              Hurst, Reading<br />
              United Kingdom
            </address>
          </div>

          <div>
            <p className="eyebrow text-brass mb-4">Enquiries</p>
            <ul className="space-y-2 text-sm text-ivory/80">
              <li>
                <a href="mailto:studio@londonfurniturestudio.com" className="hover:text-brass transition">
                  studio@londonfurniturestudio.com
                </a>
              </li>
              <li>
                <a href="tel:+441189000000" className="hover:text-brass transition">
                  +44 (0) 118 900 0000
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-brass mb-4">Follow</p>
            <a
              href="https://www.instagram.com/londonfurniturestudio/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-brass transition"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
              @londonfurniturestudio
            </a>
            <nav className="mt-8 flex flex-col gap-2 text-sm text-ivory/70">
              <Link to="/who-we-are" className="hover:text-brass transition">Who We Are</Link>
              <Link to="/what-we-do" className="hover:text-brass transition">What We Do</Link>
              <Link to="/projects" className="hover:text-brass transition">Projects</Link>
              <Link to="/contact" className="hover:text-brass transition">Contact</Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} London Furniture Studio Ltd. Registered in England &amp; Wales. Company No. 00000000.</p>
          <p>Bespoke joinery · Handcrafted in Berkshire</p>
        </div>
      </div>

      <div className="h-[380px] w-full">
        <iframe
          title="London Furniture Studio Workshop — Phoenix Way, Hurst, Reading"
          src="https://www.google.com/maps?q=Phoenix+Way,+Hurst,+Reading&output=embed"
          className="h-full w-full border-0 grayscale contrast-105"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </footer>
  );
}
