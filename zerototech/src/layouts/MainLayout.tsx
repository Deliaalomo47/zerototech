import type { ReactNode } from "react";
import { Header } from "@/features/home";
import { Heart, Rocket } from "lucide-react";

interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * Layout principal — rediseño v2.
 *
 * - Fondo con textura noise sutil para profundidad
 * - Footer emocional que cierra la experiencia con calidez
 * - Separador visual entre contenido y footer
 * - Estructura que respira
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-dvh bg-background texture-noise">
      <Header />

      <main>{children}</main>

      {/* Footer emocional */}
      <footer className="mt-20 border-t border-dark/5 bg-canvas-soft">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          {/* Logo + mensaje */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-route">
                <Rocket className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-display text-lg font-bold text-dark">
                Zero<span className="text-gradient">To</span>Tech
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-dark-soft">
              No te enseñamos tecnología. Te ayudamos a descubrir que sí podés
              formar parte de ella.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-dark/10 to-transparent" />

          {/* Bottom row */}
          <div className="mt-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
            <p className="flex items-center gap-1.5 text-xs text-dark-muted">
              Hecho con
              <Heart className="h-3 w-3 text-coral" aria-hidden="true" />
              para quienes empiezan
            </p>
            <p className="text-xs text-dark-muted">
              Kiro AI Hackathon 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
