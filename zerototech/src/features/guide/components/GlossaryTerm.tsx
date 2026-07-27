import { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";
import type { GlossaryTermData } from "../types";

interface GlossaryTermProps {
  term: GlossaryTermData;
}

/**
 * Glossary term — Noxora Holographic.
 * Glass pill, lavender glow on active, scale-in tooltip.
 */
export function GlossaryTerm({ term }: GlossaryTermProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={cn(
          "rounded-lg border px-4 py-2.5 text-small font-medium transition-all duration-300 ease-elegant",
          open
            ? "border-lavender/50 bg-lavender-light text-indigo shadow-glow-lavender"
            : "border-border bg-surface-glass text-muted backdrop-blur-xs hover:border-lavender/30 hover:text-indigo hover:-translate-y-px"
        )}
        aria-expanded={open}
      >
        {term.term}
      </button>

      {open && (
        <div
          role="tooltip"
          className="absolute left-0 top-full z-30 mt-2.5 w-72 animate-scale-in rounded-xl border border-border bg-surface-raised p-5 shadow-elevated backdrop-blur-glass"
        >
          <p className="mb-2 text-small font-bold text-indigo">{term.term}</p>
          <p className="text-small leading-relaxed text-muted">{term.definition}</p>
        </div>
      )}
    </div>
  );
}
