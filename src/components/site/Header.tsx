import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";


const nav = [
  { to: "/", label: "Home" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "var(--color-forest-deep)" : "var(--color-forest)",
        boxShadow: scrolled ? "0 1px 0 rgba(201,168,128,0.15)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10" style={{ height: scrolled ? "72px" : "92px", transition: "height 400ms ease" }}>
        <Link to="/" className="flex items-center gap-3" aria-label="London Furniture Studio home">
          <img
            src={logoLight.url}
            alt="London Furniture Studio"
            className="h-14 w-auto md:h-16 transition-all duration-500"
            style={{ height: scrolled ? "48px" : "64px" }}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.72rem] uppercase tracking-[0.28em] text-ivory/85 transition-colors hover:text-brass"
              activeProps={{ style: { color: "var(--color-brass)" } }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-ivory"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ backgroundColor: "var(--color-forest-deep)" }}>
          <nav className="flex flex-col gap-4 px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-[0.75rem] uppercase tracking-[0.28em] text-ivory/85"
                activeProps={{ style: { color: "var(--color-brass)" } }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
