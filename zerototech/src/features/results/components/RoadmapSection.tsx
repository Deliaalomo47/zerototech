import { cn } from "@/utils/cn";
import type { RoadmapPhase } from "../types";
import { RoadmapNodeCard } from "./RoadmapNodeCard";

interface RoadmapSectionProps {
  phases: RoadmapPhase[];
  isNodeCompleted: (nodeId: string) => boolean;
  onMarkCompleted: (nodeId: string, xp: number) => void;
}

/**
 * Roadmap completo — rediseño v2.
 *
 * - Línea de conexión con gradiente (no borde plano)
 * - Phase headers con mejor jerarquía visual
 * - Indicador de progreso por fase (pill con conteo)
 * - Más espacio entre fases para respirar
 * - Animación escalonada
 */
export function RoadmapSection({ phases, isNodeCompleted, onMarkCompleted }: RoadmapSectionProps) {
  return (
    <div className="space-y-12">
      {phases.map((phase, phaseIdx) => {
        const completedInPhase = phase.nodes.filter((n) => isNodeCompleted(n.id)).length;
        const totalInPhase = phase.nodes.length;
        const phaseComplete = completedInPhase === totalInPhase;

        return (
          <div key={phase.id} className="animate-fadeInUp" style={{ animationDelay: `${phaseIdx * 100}ms` }}>
            {/* Phase header */}
            <div className="mb-5 flex items-center gap-4">
              {/* Phase icon */}
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-all duration-300",
                  phaseComplete
                    ? "bg-success shadow-glow-success"
                    : "bg-canvas-deep"
                )}
              >
                <span aria-hidden="true">{phase.emoji}</span>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-dark">
                  Fase {phase.phase}: {phase.title}
                </h3>
              </div>

              {/* Progress pill */}
              <span
                className={cn(
                  "rounded-pill px-3 py-1 text-xs font-bold",
                  phaseComplete
                    ? "bg-success/10 text-success"
                    : "bg-canvas-deep text-dark-muted"
                )}
              >
                {completedInPhase}/{totalInPhase}
              </span>
            </div>

            {/* Nodes con línea lateral */}
            <div className="relative ml-6 space-y-3 pl-8">
              {/* Línea vertical */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-primary/20 via-primary/10 to-transparent"
                aria-hidden="true"
              />

              {phase.nodes.map((node) => (
                <div key={node.id} className="relative">
                  {/* Dot en la línea */}
                  <div
                    className={cn(
                      "absolute -left-8 top-7 h-3 w-3 rounded-full border-2 border-surface transition-colors duration-300",
                      isNodeCompleted(node.id)
                        ? "bg-success"
                        : "bg-canvas-deep"
                    )}
                    aria-hidden="true"
                  />
                  <RoadmapNodeCard
                    node={node}
                    isCompleted={isNodeCompleted(node.id)}
                    onMarkCompleted={onMarkCompleted}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
