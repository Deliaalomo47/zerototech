import { cn } from "@/utils/cn";
import type { RoadmapPhase } from "../types";
import { RoadmapNodeCard } from "./RoadmapNodeCard";

interface RoadmapSectionProps {
  phases: RoadmapPhase[];
  isNodeCompleted: (nodeId: string) => boolean;
  onMarkCompleted: (nodeId: string, xp: number) => void;
}

/**
 * Roadmap — Noxora Holographic.
 * Vertical timeline with gradient line, phase numbers, glow states.
 */
export function RoadmapSection({ phases, isNodeCompleted, onMarkCompleted }: RoadmapSectionProps) {
  return (
    <div className="space-y-12">
      {phases.map((phase, idx) => {
        const done = phase.nodes.filter((n) => isNodeCompleted(n.id)).length;
        const total = phase.nodes.length;
        const complete = done === total;

        return (
          <div key={phase.id} className="animate-fade-up" style={{ animationDelay: `${idx * 80}ms` }}>
            {/* Phase header */}
            <div className="mb-5 flex items-center gap-4">
              <div className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl text-small font-bold transition-all duration-300",
                complete
                  ? "bg-mint text-indigo shadow-glow-mint"
                  : "bg-gradient-indigo text-lavender shadow-soft"
              )}>
                {phase.phase}
              </div>
              <h3 className="flex-1 font-display text-title-sm text-indigo">
                {phase.title}
              </h3>
              <span className={cn(
                "rounded-full px-3 py-1 text-caption font-bold",
                complete ? "bg-mint-light text-mint-dark" : "bg-indigo-faint text-muted"
              )}>
                {done}/{total}
              </span>
            </div>

            {/* Nodes with gradient timeline */}
            <div className="relative space-y-3 ml-5 pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-lavender/40 via-mint/30 to-peach/20" aria-hidden="true" />
              {phase.nodes.map((node) => (
                <div key={node.id} className="relative">
                  <div className={cn(
                    "absolute -left-8 top-6 h-3 w-3 rounded-full border-2 border-surface transition-all duration-300",
                    isNodeCompleted(node.id) ? "bg-mint shadow-glow-mint" : "bg-indigo-faint"
                  )} aria-hidden="true" />
                  <RoadmapNodeCard node={node} isCompleted={isNodeCompleted(node.id)} onMarkCompleted={onMarkCompleted} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
