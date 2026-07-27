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
 * Tarjeta desplegable para un nodo del roadmap.
 *
 * - Estado por defecto: colapsada, mostrando título y XP
 * - Al expandir: muestra descripción, recursos con links y botón "Marcar como Aprendido"
 * - Si está completada: borde verde (success), ícono de check, no muestra botón
 */
export function RoadmapNodeCard({ node, isCompleted, onMarkCompleted }: RoadmapNodeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "rounded-card border-2 bg-surface shadow-card transition-all duration-200",
        isCompleted
          ? "border-success/50 bg-success/5"
          : "border-transparent hover:shadow-card-hover"
      )}
    >
      {/* Header — siempre visible, clickeable para expandir/colapsar */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center gap-4 p-5 text-left"
        aria-expanded={isExpanded}
        aria-controls={`node-content-${node.id}`}
      >
        {/* Indicador de estado */}
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200",
            isCompleted ? "bg-success text-white" : "bg-primary/10 text-primary"
          )}
        >
          {isCompleted ? (
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          ) : (
            <span className="text-sm font-bold">{node.xp}</span>
          )}
        </div>

        {/* Título y XP */}
        <div className="flex-1 min-w-0">
          <h4
            className={cn(
              "font-display text-base font-bold sm:text-lg",
              isCompleted ? "text-success" : "text-dark"
            )}
          >
            {node.title}
          </h4>
          <p className="mt-0.5 text-sm text-dark-soft">
            {isCompleted ? "✓ Completado" : `+${node.xp} XP`}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-dark-soft transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {/* Contenido expandible */}
      {isExpanded && (
        <div
          id={`node-content-${node.id}`}
          className="animate-fadeInUp border-t border-primary/10 px-5 pb-5 pt-4"
        >
          {/* Descripción */}
          <p className="mb-4 text-sm leading-relaxed text-dark-soft sm:text-base">
            {node.description}
          </p>

          {/* Recursos */}
          <div className="mb-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-dark-soft">
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
                  className="group flex items-center gap-3 rounded-btn bg-background px-4 py-3 text-sm transition-all duration-200 hover:bg-primary/5 hover:shadow-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="flex-1 font-medium text-dark group-hover:text-primary">
                    {resource.title}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-dark-soft opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Botón "Marcar como Aprendido" */}
          {!isCompleted && (
            <button
              type="button"
              onClick={() => onMarkCompleted(node.id, node.xp)}
              className="inline-flex items-center gap-2 rounded-btn bg-success px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover active:scale-[0.97]"
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
