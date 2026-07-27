import { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";
import type { GlossaryTermData } from "../types";

interface GlossaryTermProps {
  term: GlossaryTermData;
}

/**
 * Glossary term — Noxora final.
 * Clean pill, popover on hover/click. Mint accent when active.
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
      <button type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={cn(
          "rounded-lg border px-3.5 py-2 text-small font-medium transition-all duration-300 ease-elegant",
          open
            ? "border-mint bg-mint-light text-indigo shadow-glow"
            : "border-border text-indigo-muted hover:border-indigo/15 hover:text-indigo"
        )}
        aria-expanded={open}>
        {term.term}
      </button>

      {open && (
        <div role="tooltip"
          className="absolute left-0 top-full z-30 mt-2.5 w-72 animate-scale-in rounded-xl border border-border bg-surface p-5 shadow-elevated">
          <p className="mb-1.5 text-small font-bold text-indigo">{term.term}</p>
          <p className="text-small leading-relaxed text-muted">{term.definition}</p>
        </div>
      )}
    </div>
  );
}
