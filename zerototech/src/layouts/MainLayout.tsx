import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface MainLayoutProps {
  /**
   * Contenido de la página. Se deja opcional a propósito: hoy no hay
   * ninguna sección todavía, y este layout no debe romperse cuando
   * se empiecen a agregar features.
   */
  children?: ReactNode;
}

/**
 * Estructura base compartida por toda la app: fondo, ancho máximo de
 * contenido y espaciado responsive. Las páginas/features futuras se
 * renderizan dentro de <Container>, nunca definen su propio ancho.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-dvh bg-canvas">
      <Container as="main" className="py-8 sm:py-12">
        {children}
      </Container>
    </div>
  );
}
