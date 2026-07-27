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
 * Results page — Noxora final.
 * Generous spacing, clean sections, no visual noise.
 */
export function ResultsPage({ result, totalXP, isNodeCompleted, onMarkCompleted, onReset }: ResultsPageProps) {
  const roadmap = getRoadmapForCategory(result.winner);

  return (
    <section id="discovery-test" className="mx-auto max-w-2xl px-6 py-22" aria-label="Resultado y roadmap">
      <ProfileCard roadmap={roadmap} />

      <div className="mt-8">
        <XPBar totalXP={totalXP} />
      </div>

      {/* Roadmap header */}
      <div className="mt-18 mb-10 animate-fade-up-2 text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-faint">
          <Map className="h-6 w-6 text-indigo" aria-hidden="true" />
        </div>
        <h2 className="font-display text-title text-indigo">Tu ruta de aprendizaje</h2>
        <p className="mt-2 text-body text-muted">
          Avanzá a tu ritmo. Cada nodo suma experiencia.
        </p>
      </div>

      <RoadmapSection phases={roadmap.phases}
        isNodeCompleted={isNodeCompleted} onMarkCompleted={onMarkCompleted} />

      <div className="mt-22 flex justify-center">
        <button type="button" onClick={onReset}
          className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-small text-muted transition-all duration-300 ease-elegant hover:border-indigo/20 hover:text-indigo">
          <RotateCcw className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-180" aria-hidden="true" />
          Volver a hacer el test
        </button>
      </div>
    </section>
  );
}
