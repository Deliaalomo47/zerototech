import type { ReactNode } from "react";
import { Header } from "@/features/home";

interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * Layout — Noxora final.
 * White, airy, minimal footer.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>{children}</main>

      <footer className="mt-26 border-t border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
          <p className="text-caption text-muted">
            ZeroToTech — Kiro AI Hackathon 2025
          </p>
          <p className="text-caption text-muted/60">
            Hecho para quienes empiezan.
          </p>
        </div>
      </footer>
    </div>
  );
}
