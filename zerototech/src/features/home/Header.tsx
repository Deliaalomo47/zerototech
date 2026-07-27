import { Rocket } from "lucide-react";

/**
 * Header — Noxora final.
 * Clean, airy, indigo wordmark. No clutter.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-lg border-b border-border">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5" aria-label="ZeroToTech — Inicio">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo">
            <Rocket className="h-4 w-4 text-mint" aria-hidden="true" />
          </div>
          <span className="font-display text-xl font-bold text-indigo">
            ZeroToTech
          </span>
        </a>
      </div>
    </header>
  );
}
