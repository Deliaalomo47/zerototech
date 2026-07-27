import { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/utils/cn";
import type { GlossaryTermData } from "../types";

interface GlossaryTermProps {
  term: GlossaryTermData;
}

/**
 * Término del glosario con tooltip de definición al hover/clic.
 * En mobile usa clic (toggle), en desktop también funciona con hover.
 * La definición aparece con fade-in sutil.
 */
export function GlossaryTerm({ term }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cierra el tooltip al hacer clic fuera
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
      {/* Palabra clickeable */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={cn(
          "group inline-flex items-center gap-2 rounded-btn border-2 bg-surface px-4 py-3 text-left shadow-card transition-all duration-200",
          "hover:-translate-y-0.5 hover:shadow-card-hover",
          isOpen
            ? "border-primary bg-primary/5"
            : "border-transparent"
        )}
        aria-expanded={isOpen}
        aria-describedby={`def-${term.id}`}
      >
        <MessageCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span className="font-display text-sm font-bold text-dark sm:text-base">
          {term.term}
        </span>
      </button>

      {/* Tooltip con definición */}
      {isOpen && (
        <div
          id={`def-${term.id}`}
          role="tooltip"
          className="absolute left-0 top-full z-20 mt-2 w-72 animate-fadeInUp rounded-card border border-primary/10 bg-surface p-4 shadow-soft sm:w-80"
        >
          <p className="text-sm leading-relaxed text-dark-soft">
            {term.definition}
          </p>
        </div>
      )}
    </div>
  );
}
