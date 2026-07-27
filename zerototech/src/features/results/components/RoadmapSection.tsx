import { cn } from "@/utils/cn";
import type { RoadmapPhase } from "../types";
import { RoadmapNodeCard } from "./RoadmapNodeCard";

interface RoadmapSectionProps {
  phases: RoadmapPhase[];
  isNodeCompleted: (nodeId: string) => boolean;
  onMarkCompleted: (nodeId: string, xp: number) => void;
}

/**
 * Roadmap — v3.
 *
 * Clean vertical timeline. Minimal chrome.
 * Phase headers are tight labels, not heavy blocks.
 */
export function RoadmapSection({ phases, isNodeCompleted, onMarkCompleted }: RoadmapSectionProps) {
  return (
    <div className="space-y-10">
      {phases.map((phase) => {
        const completedInPhase = phase.nodes.filter((n) => isNodeCompleted(n.id)).length;
        const totalInPhase = phase.nodes.length;
        const phaseComplete = completedInPhase === totalInPhase;

        return (
          <div key={phase.id} className="animate-fade-up">
            {/* Phase header */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xl" aria-hidden="true">{phase.emoji}</span>
              <h3 className="flex-1 font-display text-body-lg font-bold text-neutral-900">
                Fase {phase.phase}: {phase.title}
              </h3>
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-caption font-semibold",
                  phaseComplete
                    ? "bg-success/10 text-success"
                    : "bg-neutral-100 text-neutral-400"
                )}
              >
                {completedInPhase}/{totalInPhase}
              </span>
            </div>

            {/* Nodes */}
            <div className="space-y-2.5 border-l-2 border-neutral-100 pl-6 ml-2.5">
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
