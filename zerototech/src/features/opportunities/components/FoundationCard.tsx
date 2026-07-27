import { GraduationCap, ExternalLink, Heart } from "lucide-react";
import type { FoundationData } from "../types";

interface FoundationCardProps {
  foundation: FoundationData;
  isRecommended?: boolean;
}

/**
 * FoundationCard — reusable card for organizations/foundations.
 */
export function FoundationCard({ foundation, isRecommended }: FoundationCardProps) {
  return (
    <article className="glass-card rounded-2xl p-7 transition-all duration-300 ease-elegant hover:-translate-y-1 hover:shadow-hover">
      {/* Recommended badge */}
      {isRecommended && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-mint-light px-3 py-1 text-caption font-bold text-mint-dark">
          <Heart className="h-3 w-3" aria-hidden="true" />
          Recomendado para vos
        </div>
      )}

      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-peach-light">
          <GraduationCap className="h-5 w-5 text-indigo" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-body font-bold text-indigo">{foundation.name}</h3>
          {foundation.isFree && (
            <span className="text-caption font-semibold text-mint-dark">Gratuito</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-small text-muted leading-relaxed">{foundation.description}</p>

      {/* Programs */}
      <div className="mb-4">
        <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-indigo-muted">Programas</p>
        <p className="text-small text-muted">{foundation.programs}</p>
      </div>

      {/* Audience */}
      <div className="mb-5">
        <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-indigo-muted">Dirigido a</p>
        <p className="text-small text-muted">{foundation.audience}</p>
      </div>

      {/* CTA */}
      <a href={foundation.url} target="_blank" rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-indigo-faint px-5 py-2.5 text-small font-semibold text-indigo transition-all duration-300 ease-elegant hover:bg-gradient-indigo hover:text-white hover:shadow-soft">
        Descubrir oportunidad
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}
