import { useState } from "react";
import { ChevronDown, ExternalLink, CheckCircle2, BookOpen, Video, Wrench, GraduationCap } from "lucide-react";
import { cn } from "@/utils/cn";
import type { RoadmapNode, RoadmapResource } from "../types";

const resourceIconMap: Record<RoadmapResource["type"], typeof BookOpen> = {
  "artículo": BookOpen, video: Video, curso: GraduationCap, herramienta: Wrench,
};

interface RoadmapNodeCardProps {
  node: RoadmapNode;
  isCompleted: boolean;
  onMarkCompleted: (nodeId: string, xp: number) => void;
}

/**
 * Roadmap node — Noxora Holographic.
 * Glass card, mint glow on complete, depth.
 */
export function RoadmapNodeCard({ node, isCompleted, onMarkCompleted }: RoadmapNodeCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(
      "rounded-xl border-2 transition-all duration-300 ease-elegant",
      isCompleted
        ? "border-mint/40 bg-mint-light shadow-glow-mint"
        : "glass-card border-border hover:shadow-hover hover:-translate-y-0.5"
    )}>
      <button type="button" onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 p-5 text-left" aria-expanded={open}>
        <div className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-caption font-bold transition-all duration-300",
          isCompleted
            ? "bg-mint text-indigo shadow-glow-mint"
            : "bg-indigo-faint text-indigo-muted"
        )}>
          {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : <span className="text-small">{node.xp}</span>}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={cn("text-body font-semibold", isCompleted ? "text-mint-dark" : "text-indigo")}>
            {node.title}
          </h4>
          <p className="text-caption text-muted">
            {isCompleted ? "Completado" : `+${node.xp} XP`}
          </p>
        </div>
        <ChevronDown className={cn(
          "h-4 w-4 shrink-0 text-muted transition-transform duration-300",
          open && "rotate-180"
        )} aria-hidden="true" />
      </button>

      {open && (
        <div className="animate-fade-in border-t border-border px-5 pb-6 pt-4">
          <p className="mb-5 text-small text-muted leading-relaxed">{node.description}</p>

          <div className="mb-5 space-y-2">
            <p className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Recursos</p>
            {node.resources.map((r, i) => {
              const Icon = resourceIconMap[r.type] ?? BookOpen;
              return (
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-lavender-light">
                  <Icon className="h-4 w-4 shrink-0 text-lavender group-hover:text-indigo" aria-hidden="true" />
                  <span className="flex-1 text-small text-muted group-hover:text-indigo">{r.title}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted/40 opacity-0 group-hover:opacity-100" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {!isCompleted && (
            <button type="button" onClick={() => onMarkCompleted(node.id, node.xp)}
              className="inline-flex items-center gap-2 rounded-xl bg-mint px-6 py-3 text-small font-semibold text-indigo shadow-soft transition-all duration-300 ease-elegant hover:-translate-y-0.5 hover:shadow-glow-mint active:scale-[0.97]">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Marcar como Aprendido
            </button>
          )}
        </div>
      )}
    </div>
  );
}
