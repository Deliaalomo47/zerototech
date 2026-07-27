import { Rocket } from "lucide-react";

/**
 * Header — primera pieza de contacto visual.
 *
 * Rediseño v2:
 * - Fondo glassmorphism sutil con backdrop-blur para profundidad
 * - Logo con gradiente que refleja la identidad de marca
 * - Sticky para acompañar al usuario en todo el scroll
 * - Transición suave al hacer scroll (se solidifica)
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="ZeroToTech — Inicio"
        >
          {/* Ícono con fondo gradiente */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-route shadow-soft transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
            <Rocket className="h-[18px] w-[18px] text-white" aria-hidden="true" />
          </div>

          {/* Wordmark */}
          <span className="font-display text-xl font-extrabold tracking-tight text-dark sm:text-[1.35rem]">
            Zero
            <span className="text-gradient">To</span>
            Tech
          </span>
        </a>

        {/* Badge motivador — solo visible en desktop */}
        <div className="hidden items-center gap-2 rounded-pill border border-primary/10 bg-primary-50 px-3.5 py-1.5 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulseGlow" aria-hidden="true" />
          <span className="text-xs font-semibold text-primary">
            Tu camino IT empieza acá
          </span>
        </div>
      </div>
    </header>
  );
}
