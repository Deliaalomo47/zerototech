import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/utils/cn";
import type { GlossaryTermData } from "../types";

interface GlossaryTermProps {
  term: GlossaryTermData;
}

/**
 * Término del glosario — rediseño v2.
 *
 * - Pill interactiva con micro-animación
 * - Tooltip con flecha visual y sombra elevada
 * - Botón de cerrar en mobile
 * - Mejor posicionamiento responsive
 * - Transición de entrada con scaleIn
 */
export function GlossaryTerm({ term }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      {/* Pill clickeable */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={cn(
          "group inline-flex items-center gap-2 rounded-pill border px-4 py-2.5 text-left transition-all duration-300 ease-out-expo",
          "hover:-translate-y-0.5",
          isOpen
            ? "border-primary/30 bg-primary-50 shadow-glow text-primary"
            : "border-dark/8 bg-surface text-dark shadow-card hover:border-primary/20 hover:shadow-card-hover"
        )}
        aria-expanded={isOpen}
        aria-describedby={`def-${term.id}`}
      >
        <MessageCircle
          className={cn(
            "h-3.5 w-3.5 shrink-0 transition-colors",
            isOpen ? "text-primary" : "text-dark-muted group-hover:text-primary"
          )}
          aria-hidden="true"
        />
        <span className="font-display text-sm font-bold sm:text-base">
          {term.term}
        </span>
      </button>

      {/* Tooltip */}
      {isOpen && (
        <div
          id={`def-${term.id}`}
          role="tooltip"
          className="absolute left-0 top-full z-30 mt-3 w-72 animate-scaleIn rounded-card border border-primary/10 bg-surface p-5 shadow-elevated sm:w-80"
        >
          {/* Flecha */}
          <div className="absolute -top-1.5 left-6 h-3 w-3 rotate-45 border-l border-t border-primary/10 bg-surface" aria-hidden="true" />

          {/* Header con close en mobile */}
          <div className="mb-2 flex items-start justify-between">
            <span className="font-display text-sm font-bold text-primary">
              {term.term}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-dark-muted hover:bg-canvas-deep hover:text-dark sm:hidden"
              aria-label="Cerrar definición"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Definición */}
          <p className="text-sm leading-relaxed text-dark-soft">
            {term.definition}
          </p>
        </div>
      )}
    </div>
  );
}
