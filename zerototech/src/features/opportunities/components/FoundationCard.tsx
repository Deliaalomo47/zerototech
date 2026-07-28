import { GraduationCap, ExternalLink, Heart } from "lucide-react";
import type { FoundationData } from "../types";

interface FoundationCardProps {
  foundation: FoundationData;
  isRecommended?: boolean;
}

/**
 * FoundationCard — uses design tokens only.
 * Titles: text-text (white)
 * Descriptions: text-text-secondary
 * Labels: text-text-muted
 * Icons: text-accent or text-primary
 */
export function FoundationCard({ foundation, isRecommended }: FoundationCardProps) {
  return (
    <article className="glass-card rounded-2xl p-7 transition-all duration-300 ease-elegant hover:-translate-y-1 hover:shadow-hover">
      {/* Recommended badge */}
      {isRecommended && (
        <div className="badge mb-4">
          <Heart className="h-3 w-3 text-accent" aria-hidden="true" />
          Recomendado para vos
        </div>
      )}

      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-hover">
          <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-body font-bold text-accent">{foundation.name}</h3>
          {foundation.isFree && (
            <span className="text-caption font-semibold text-accent">Gratuito</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-small text-text-secondary leading-relaxed">{foundation.description}</p>

      {/* Programs */}
      <div className="mb-4">
        <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-text-muted">Programas</p>
        <p className="text-small text-text-secondary">{foundation.programs}</p>
      </div>

      {/* Audience */}
      <div className="mb-5">
        <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-text-muted">Dirigido a</p>
        <p className="text-small text-text-secondary">{foundation.audience}</p>
      </div>

      {/* CTA */}
      <a href={foundation.url} target="_blank" rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-surface-hover px-5 py-2.5 text-small font-semibold text-text transition-all duration-300 ease-elegant hover:bg-gradient-brand hover:text-background hover:shadow-glow">
        Descubrir oportunidad
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}
