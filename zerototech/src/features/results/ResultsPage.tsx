import { RotateCcw } from "lucide-react";
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
 * Página de resultados completa:
 * 1. Tarjeta de perfil con rol recomendado y mensaje motivador
 * 2. Barra de XP y nivel
 * 3. Roadmap interactivo por fases
 * 4. Botón para reiniciar el test
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
      className="mx-auto max-w-3xl px-4 py-12 sm:px-6"
      aria-label="Resultado del test y roadmap"
    >
      {/* Tarjeta de perfil */}
      <ProfileCard roadmap={roadmap} />

      {/* Barra de XP */}
      <div className="mt-8">
        <XPBar totalXP={totalXP} />
      </div>

      {/* Título del roadmap */}
      <div className="mt-12 mb-8 text-center">
        <h2 className="font-display text-2xl font-bold text-dark sm:text-3xl">
          Tu ruta de aprendizaje
        </h2>
        <p className="mt-2 text-dark-soft">
          Avanzá a tu ritmo. Cada nodo que completes suma experiencia.
        </p>
      </div>

      {/* Roadmap interactivo */}
      <RoadmapSection
        phases={roadmap.phases}
        isNodeCompleted={isNodeCompleted}
        onMarkCompleted={onMarkCompleted}
      />

      {/* Botón reiniciar */}
      <div className="mt-16 text-center">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-btn text-sm font-medium text-dark-soft transition-colors duration-200 hover:text-primary"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Volver a hacer el test
        </button>
      </div>
    </section>
  );
}
