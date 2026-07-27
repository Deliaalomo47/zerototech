import { Rocket } from "lucide-react";

/**
 * Header simple con el logo/nombre de ZeroToTech.
 * Diseño limpio, sin navegación compleja en esta etapa.
 */
export function Header() {
  return (
    <header className="w-full py-5">
      <div className="mx-auto flex max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-2 text-dark transition-opacity duration-200 hover:opacity-80"
          aria-label="ZeroToTech — Inicio"
        >
          <Rocket className="h-7 w-7 text-primary" aria-hidden="true" />
          <span className="font-display text-xl font-bold sm:text-2xl">
            Zero<span className="text-primary">To</span>Tech
          </span>
        </a>
      </div>
    </header>
  );
}
