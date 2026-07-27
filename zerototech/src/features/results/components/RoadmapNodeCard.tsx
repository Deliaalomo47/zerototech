import { useState } from "react";
import { ChevronDown, ExternalLink, CheckCircle2, BookOpen, Video, Wrench, GraduationCap, Sparkles } from "lucide-react";
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
 * Nodo del roadmap desplegable — rediseño v2.
 *
 * - Estado completado con glow verde sutil
 * - Animación scaleIn para el check
 * - Recursos con hover más premium
 * - Botón de completar con efecto de celebración
 * - Transiciones más orgánicas
 */
export function RoadmapNodeCard({ node, isCompleted, onMarkCompleted }: RoadmapNodeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "rounded-card border-2 bg-surface transition-all duration-300 ease-out-expo",
        isCompleted
          ? "border-success/40 shadow-glow-success"
          : "border-transparent shadow-card hover:shadow-card-hover"
      )}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
        aria-expanded={isExpanded}
        aria-controls={`node-content-${node.id}`}
      >
        {/* Indicador */}
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
            isCompleted
              ? "bg-success text-white shadow-glow-success"
              : "bg-canvas-deep text-primary"
          )}
        >
          {isCompleted ? (
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          ) : (
            <span className="text-sm font-bold">{node.xp}</span>
          )}
        </div>

        {/* Título y meta */}
        <div className="flex-1 min-w-0">
          <h4
            className={cn(
              "font-display text-base font-bold sm:text-lg",
              isCompleted ? "text-success" : "text-dark"
            )}
          >
            {node.title}
          </h4>
          <p className="mt-0.5 text-sm text-dark-muted">
            {isCompleted ? "Completado" : `+${node.xp} XP al completar`}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-dark-muted transition-transform duration-300 ease-out-expo",
            isExpanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {/* Contenido expandible */}
      {isExpanded && (
        <div
          id={`node-content-${node.id}`}
          className="animate-fadeInUp border-t border-canvas-deep/50 px-5 pb-6 pt-5 sm:px-6"
        >
          {/* Descripción */}
          <p className="mb-5 text-sm leading-relaxed text-dark-soft sm:text-base">
            {node.description}
          </p>

          {/* Recursos */}
          <div className="mb-6 space-y-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-dark-muted">
              Recursos recomendados
            </p>
            {node.resources.map((resource, idx) => {
              const Icon = resourceIconMap[resource.type] ?? BookOpen;
              return (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-transparent bg-canvas-soft px-4 py-3.5 text-sm transition-all duration-200 hover:border-primary/15 hover:bg-primary-50 hover:shadow-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <span className="flex-1 font-medium text-dark group-hover:text-primary">
                    {resource.title}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-dark-muted opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Botón completar */}
          {!isCompleted && (
            <button
              type="button"
              onClick={() => onMarkCompleted(node.id, node.xp)}
              className="group inline-flex items-center gap-2.5 rounded-btn-lg bg-success px-6 py-3 text-sm font-bold text-white shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-glow-success active:scale-[0.97]"
            >
              <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
              Marcar como Aprendido
            </button>
          )}
        </div>
      )}
    </div>
  );
}
