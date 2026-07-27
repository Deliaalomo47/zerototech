import type { ReactNode } from "react";
import { Header } from "@/features/home";
import { Compass } from "lucide-react";

interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * Layout — Noxora Holographic.
 * Alive background (set in globals.css body), premium footer.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-dvh">
      <Header />
      <main>{children}</main>

      {/* Footer — indigo, premium, branded */}
      <footer className="mt-26 border-t border-border bg-gradient-indigo">
        <div className="mx-auto max-w-5xl px-6 py-12">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <Compass className="h-4 w-4 text-mint" aria-hidden="true" />
            </div>
            <span className="font-display text-body font-bold text-white/90">
              ZeroToTech
            </span>
          </div>

          {/* Tagline */}
          <p className="mb-8 max-w-sm text-small text-white/50 leading-relaxed">
            No te enseñamos tecnología. Te ayudamos a descubrir que sí podés formar parte de ella.
          </p>

          {/* Bottom */}
          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-caption text-white/40">
              Kiro AI Hackathon 2025
            </p>
            <p className="text-caption text-white/30">
              Hecho con cariño para quienes empiezan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
