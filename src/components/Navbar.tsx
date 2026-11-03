import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/content/site";
import { cn } from "@/lib/utils";

/** Text wordmark used until the official logo file is provided. */
function Wordmark({ scrolled }: { scrolled: boolean }) {
  return (
    <a href="#home" className="flex flex-col leading-none">
      <span
        className={cn(
          "font-display text-2xl font-medium tracking-wide transition-colors duration-300",
          scrolled ? "text-primary" : "text-background"
        )}
      >
        Yashogaatha
      </span>
      <span
        className={cn(
          "text-[0.6rem] font-semibold uppercase tracking-[0.5em] transition-colors duration-300",
          scrolled ? "text-muted-foreground" : "text-background/80"
        )}
      >
        Events
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Wordmark scrolled={solid} />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300",
                solid
                  ? "text-foreground hover:text-primary"
                  : "text-background/90 hover:text-background"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300",
              solid
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-background text-primary hover:bg-background/90"
            )}
          >
            Plan Your Event
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
            solid ? "text-foreground hover:bg-accent" : "text-background hover:bg-background/10"
          )}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm font-medium text-foreground transition-colors last:border-0 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Plan Your Event
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
