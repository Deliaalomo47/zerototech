import type { ReactNode } from "react";
import { Header } from "@/features/home";

interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * Layout — v3.
 *
 * Vercel-inspired: minimal structure, clean footer,
 * no heavy decorations. The content speaks.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>{children}</main>

      {/* Footer — minimal like Vercel */}
      <footer className="mt-22 border-t border-neutral-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 sm:px-6">
          <p className="text-caption text-neutral-400">
            ZeroToTech — Kiro AI Hackathon 2025
          </p>
          <p className="text-caption text-neutral-300">
            Hecho para quienes empiezan.
          </p>
        </div>
      </footer>
    </div>
  );
}
