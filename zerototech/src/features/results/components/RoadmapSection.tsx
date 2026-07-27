import { cn } from "@/utils/cn";
import type { RoadmapPhase } from "../types";
import { RoadmapNodeCard } from "./RoadmapNodeCard";

interface RoadmapSectionProps {
  phases: RoadmapPhase[];
  isNodeCompleted: (nodeId: string) => boolean;
  onMarkCompleted: (nodeId: string, xp: number) => void;
}

/**
 * Roadmap — Noxora final.
 * Airy phases, mint timeline, generous spacing.
 */
export function RoadmapSection({ phases, isNodeCompleted, onMarkCompleted }: RoadmapSectionProps) {
  return (
    <div className="space-y-12">
      {phases.map((phase) => {
        const done = phase.nodes.filter((n) => isNodeCompleted(n.id)).length;
        const total = phase.nodes.length;
        const complete = done === total;

        return (
          <div key={phase.id} className="animate-fade-up">
            <div className="mb-5 flex items-center gap-3">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl text-small font-bold",
                complete ? "bg-mint text-indigo" : "bg-indigo-faint text-indigo-muted"
              )}>
                {phase.phase}
              </div>
              <h3 className="flex-1 font-display text-subtitle font-bold text-indigo">
                {phase.title}
              </h3>
              <span className={cn(
                "rounded-full px-3 py-1 text-caption font-semibold",
                complete ? "bg-mint-light text-mint-dark" : "bg-indigo-faint text-muted"
              )}>
                {done}/{total}
              </span>
            </div>

            <div className="space-y-3 border-l-2 border-indigo-faint pl-7 ml-5">
              {phase.nodes.map((node) => (
                <RoadmapNodeCard key={node.id} node={node}
                  isCompleted={isNodeCompleted(node.id)} onMarkCompleted={onMarkCompleted} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
