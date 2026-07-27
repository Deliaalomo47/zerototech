import { Compass } from "lucide-react";

/**
 * Header — Noxora Holographic.
 *
 * Logo: Compass icon (discovery, path, direction).
 * Glass surface, indigo-dominant, subtle border.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface-glass backdrop-blur-glass border-b border-border">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="/" className="group flex items-center gap-2.5" aria-label="ZeroToTech — Inicio">
          {/* Logo mark — Compass (discovery + path) */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-indigo shadow-soft transition-transform duration-300 ease-elegant group-hover:scale-105">
            <Compass className="h-4.5 w-4.5 text-mint" aria-hidden="true" />
          </div>
          {/* Wordmark */}
          <span className="font-display text-xl font-bold text-indigo">
            Zero<span className="text-lavender">To</span>Tech
          </span>
        </a>

        {/* Status — minimal, alive */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <div className="h-2 w-2 rounded-full bg-mint shadow-glow-mint animate-glow-pulse" />
          <span className="text-small text-muted">Explorando</span>
        </div>
      </div>
    </header>
  );
}
