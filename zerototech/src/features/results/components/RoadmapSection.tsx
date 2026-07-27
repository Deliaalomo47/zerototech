import type { RoadmapPhase } from "../types";
import { RoadmapNodeCard } from "./RoadmapNodeCard";

interface RoadmapSectionProps {
  phases: RoadmapPhase[];
  isNodeCompleted: (nodeId: string) => boolean;
  onMarkCompleted: (nodeId: string, xp: number) => void;
}

/**
 * Renderiza el roadmap completo como fases secuenciales con nodos expandibles.
 * Cada fase tiene un header visual y sus nodos desplegables.
 */
export function RoadmapSection({ phases, isNodeCompleted, onMarkCompleted }: RoadmapSectionProps) {
  return (
    <div className="space-y-10">
      {phases.map((phase) => {
        const completedInPhase = phase.nodes.filter((n) => isNodeCompleted(n.id)).length;
        const totalInPhase = phase.nodes.length;
        const phaseComplete = completedInPhase === totalInPhase;

        return (
          <div key={phase.id} className="animate-fadeInUp">
            {/* Header de la fase */}
            <div className="mb-4 flex items-center gap-3">
              {/* Indicador numérico */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${
                  phaseComplete
                    ? "bg-success text-white"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {phase.emoji}
              </div>

              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-dark">
                  Fase {phase.phase}: {phase.title}
                </h3>
                <p className="text-sm text-dark-soft">
                  {completedInPhase}/{totalInPhase} completados
                </p>
              </div>
            </div>

            {/* Línea de conexión visual entre fases */}
            <div className="ml-5 space-y-3 border-l-2 border-dashed border-primary/20 pl-7">
              {phase.nodes.map((node) => (
                <RoadmapNodeCard
                  key={node.id}
                  node={node}
                  isCompleted={isNodeCompleted(node.id)}
                  onMarkCompleted={onMarkCompleted}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
