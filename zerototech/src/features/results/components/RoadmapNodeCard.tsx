import { useState } from "react";
import { ChevronDown, ExternalLink, CheckCircle2, BookOpen, Video, Wrench, GraduationCap } from "lucide-react";
import { cn } from "@/utils/cn";
import type { RoadmapNode, RoadmapResource } from "../types";

const resourceIconMap: Record<RoadmapResource["type"], typeof BookOpen> = {
  "artículo": BookOpen,
  video: Video,
  curso: GraduationCap,
  herramienta: Wrench,
};

interface RoadmapNodeCardProps {
  node: RoadmapNode;
  isCompleted: boolean;
  onMarkCompleted: (nodeId: string, xp: number) => void;
}

/**
 * Roadmap node — v3.
 *
 * Linear-inspired: collapsible, clean borders, precise states.
 */
export function RoadmapNodeCard({ node, isCompleted, onMarkCompleted }: RoadmapNodeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-200",
        isCompleted
          ? "border-success/30 bg-success/5"
          : "border-neutral-200 bg-surface"
      )}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center gap-3 p-4 text-left"
        aria-expanded={isExpanded}
      >
        {/* State indicator */}
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-caption font-bold",
            isCompleted
              ? "bg-success text-white"
              : "bg-neutral-100 text-neutral-500"
          )}
        >
          {isCompleted ? (
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          ) : (
            <span>{node.xp}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className={cn(
            "text-body-sm font-semibold",
            isCompleted ? "text-success" : "text-neutral-900"
          )}>
            {node.title}
          </h4>
          <p className="text-caption text-neutral-400">
            {isCompleted ? "Completado" : `+${node.xp} XP`}
          </p>
        </div>

        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="animate-fade-in border-t border-neutral-100 px-4 pb-4 pt-3">
          <p className="mb-4 text-body-sm text-neutral-500">
            {node.description}
          </p>

          {/* Resources */}
          <div className="mb-4 space-y-1.5">
            <p className="text-caption font-semibold uppercase tracking-wider text-neutral-400">
              Recursos
            </p>
            {node.resources.map((resource, idx) => {
              const Icon = resourceIconMap[resource.type] ?? BookOpen;
              return (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-body-sm transition-colors hover:bg-neutral-50"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-neutral-400 group-hover:text-primary" aria-hidden="true" />
                  <span className="flex-1 text-neutral-600 group-hover:text-neutral-900">
                    {resource.title}
                  </span>
                  <ExternalLink className="h-3 w-3 text-neutral-300 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Complete button */}
          {!isCompleted && (
            <button
              type="button"
              onClick={() => onMarkCompleted(node.id, node.xp)}
              className="inline-flex items-center gap-2 rounded-lg bg-success px-4 py-2 text-body-sm font-semibold text-white transition-all duration-200 hover:bg-success/90 active:scale-[0.98]"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Marcar como Aprendido
            </button>
          )}
        </div>
      )}
    </div>
  );
}
