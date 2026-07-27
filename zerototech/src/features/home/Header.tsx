import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "descubri", label: "Descubrí tu pasión" },
  { id: "roles", label: "Roles IT" },
  { id: "empresas", label: "Empresas" },
  { id: "comunidad", label: "Comunidad" },
  { id: "roadmap", label: "Roadmap" },
];

/**
 * Header — Noxora Holographic with full navigation.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-glass backdrop-blur-glass border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2.5"
          aria-label="ZeroToTech — Inicio">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-indigo shadow-soft transition-transform duration-300 ease-elegant group-hover:scale-105">
            <Compass className="h-4.5 w-4.5 text-mint" aria-hidden="true" />
          </div>
          <span className="font-display text-xl font-bold text-indigo">
            Zero<span className="text-lavender">To</span>Tech
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {navItems.map((item) => (
            <button key={item.id} type="button"
              onClick={() => scrollTo(item.id)}
              className="rounded-lg px-3 py-2 text-small font-medium text-muted transition-all duration-200 hover:text-indigo hover:bg-indigo-faint">
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button type="button" onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg lg:hidden hover:bg-indigo-faint transition-colors"
          aria-label="Menú">
          {menuOpen ? <X className="h-5 w-5 text-indigo" /> : <Menu className="h-5 w-5 text-indigo" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-border bg-surface-raised p-4 animate-fade-in" aria-label="Navegación móvil">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button key={item.id} type="button"
                onClick={() => scrollTo(item.id)}
                className={cn("rounded-lg px-4 py-3 text-left text-small font-medium text-muted transition-all hover:text-indigo hover:bg-indigo-faint")}>
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
