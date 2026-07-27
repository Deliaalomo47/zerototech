import { RotateCcw, Map } from "lucide-react";
import type { QuizResult } from "@/features/discovery/types";
import { getRoadmapForCategory } from "./data/roadmaps";
import { ProfileCard, RoadmapSection, XPBar } from "./components";

interface ResultsPageProps {
  result: QuizResult;
  totalXP: number;
  isNodeCompleted: (nodeId: string) => boolean;
  onMarkCompleted: (nodeId: string, xp: number) => void;
  onReset: () => void;
}

/**
 * Página de resultados — rediseño v2.
 *
 * - Más espacio entre secciones para narrativa visual
 * - Header de roadmap con ícono decorativo
 * - Botón de reset más sutil y fuera del camino
 * - Separadores visuales con gradiente
 */
export function ResultsPage({
  result,
  totalXP,
  isNodeCompleted,
  onMarkCompleted,
  onReset,
}: ResultsPageProps) {
  const roadmap = getRoadmapForCategory(result.winner);

  return (
    <section
      id="discovery-test"
      className="mx-auto max-w-3xl px-5 py-16 sm:px-8"
      aria-label="Resultado del test y roadmap"
    >
      {/* Tarjeta de perfil */}
      <ProfileCard roadmap={roadmap} />

      {/* Barra de XP */}
      <div className="mt-8">
        <XPBar totalXP={totalXP} />
      </div>

      {/* Divider */}
      <div className="section-divider" />

      {/* Título del roadmap */}
      <div className="mb-10 text-center animate-fadeInUp-delay-2">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Map className="h-6 w-6 text-primary" aria-hidden="true" />
        </div>
        <h2 className="mb-2 font-display text-section font-bold text-dark">
          Tu ruta de aprendizaje
        </h2>
        <p className="text-dark-soft">
          Avanzá a tu ritmo. Cada nodo que completes suma experiencia.
        </p>
      </div>

      {/* Roadmap */}
      <RoadmapSection
        phases={roadmap.phases}
        isNodeCompleted={isNodeCompleted}
        onMarkCompleted={onMarkCompleted}
      />

      {/* Reset */}
      <div className="mt-20 text-center">
        <button
          type="button"
          onClick={onReset}
          className="group inline-flex items-center gap-2 rounded-pill border border-dark/10 px-5 py-2.5 text-sm font-medium text-dark-muted transition-all duration-200 hover:border-primary/30 hover:text-primary hover:shadow-card"
        >
          <RotateCcw className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-180" aria-hidden="true" />
          Volver a hacer el test
        </button>
      </div>
    </section>
  );
}
