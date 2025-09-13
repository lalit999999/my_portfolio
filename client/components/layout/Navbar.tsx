import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? "backdrop-blur-md bg-white/70 dark:bg-zinc-900/60 shadow-sm" : "bg-transparent"
    }`}>
      <nav className="container flex items-center justify-between py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="group inline-flex items-center gap-2"
        >
          <span className="relative inline-block font-extrabold tracking-tight text-xl">
            <span className="text-primary">LALIT</span>
          </span>
          <span className="sr-only">Go to home</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNavClick(l.id)}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNavClick(l.id)}
                className="text-left py-2 text-base text-foreground/90 hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
