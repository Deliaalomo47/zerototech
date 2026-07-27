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
 * Results page — v3.
 *
 * Clean structure: profile → XP → roadmap → reset.
 * Generous whitespace between sections.
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
      className="mx-auto max-w-2xl px-5 py-18 sm:px-6"
      aria-label="Resultado del test y roadmap"
    >
      <ProfileCard roadmap={roadmap} />

      <div className="mt-6">
        <XPBar totalXP={totalXP} />
      </div>

      {/* Roadmap header */}
      <div className="mt-15 mb-8 animate-fade-up-2">
        <h2 className="font-display text-display-sm text-neutral-900">
          Tu ruta de aprendizaje
        </h2>
        <p className="mt-1 text-body-sm text-neutral-400">
          Avanzá a tu ritmo. Cada nodo suma experiencia.
        </p>
      </div>

      <RoadmapSection
        phases={roadmap.phases}
        isNodeCompleted={isNodeCompleted}
        onMarkCompleted={onMarkCompleted}
      />

      {/* Reset */}
      <div className="mt-18 flex justify-center">
        <button
          type="button"
          onClick={onReset}
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-body-sm text-neutral-400 transition-all duration-200 hover:border-neutral-300 hover:text-neutral-600"
        >
          <RotateCcw className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-180" aria-hidden="true" />
          Volver a hacer el test
        </button>
      </div>
    </section>
  );
}
