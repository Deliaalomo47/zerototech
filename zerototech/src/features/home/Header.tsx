import { Rocket } from "lucide-react";

/**
 * Header — v3.
 *
 * Linear-inspired: minimal, single-line, no noise.
 * Sticky with a 1px gradient border that fades at edges.
 * Logo as a tight wordmark with icon. No extra badges or clutter.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl">
      {/* Bottom border — gradient that fades at edges */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <a
          href="/"
          className="group flex items-center gap-2"
          aria-label="ZeroToTech — Inicio"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-brand">
            <Rocket className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          </div>
          <span className="font-display text-[1.1rem] font-extrabold tracking-tight text-neutral-900">
            Zero<span className="text-gradient">To</span>Tech
          </span>
        </a>

        {/* Minimal status indicator */}
        <div className="flex items-center gap-2 text-body-sm text-neutral-500">
          <span className="hidden sm:inline">Tu camino IT</span>
          <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-soft" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
