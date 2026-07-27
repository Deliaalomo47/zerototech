import { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";
import type { GlossaryTermData } from "../types";

interface GlossaryTermProps {
  term: GlossaryTermData;
}

/**
 * Glossary term — v3.
 *
 * Minimal pill. Tooltip on hover/click.
 * Clean popover without arrows or heavy chrome.
 */
export function GlossaryTerm({ term }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [isOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={cn(
          "rounded-lg border px-3 py-1.5 text-body-sm font-medium transition-all duration-200",
          isOpen
            ? "border-primary/30 bg-primary-subtle text-primary"
            : "border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
        )}
        aria-expanded={isOpen}
      >
        {term.term}
      </button>

      {isOpen && (
        <div
          role="tooltip"
          className="absolute left-0 top-full z-30 mt-2 w-64 animate-scale-in rounded-xl border border-neutral-200 bg-surface p-4 shadow-xl sm:w-72"
        >
          <p className="mb-1 text-body-sm font-semibold text-neutral-900">
            {term.term}
          </p>
          <p className="text-body-sm leading-relaxed text-neutral-500">
            {term.definition}
          </p>
        </div>
      )}
    </div>
  );
}
