import type { ReactNode } from "react";
import { Header } from "@/features/home";

interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * Estructura base de la app: Header fijo + contenido principal.
 * Las páginas/features se renderizan como children.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>{children}</main>
    </div>
  );
}
