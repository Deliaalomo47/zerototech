import { Calendar, ExternalLink, Heart } from "lucide-react";
import type { EventData } from "../types";

interface EventCardProps {
  event: EventData;
  isRecommended?: boolean;
}

/**
 * EventCard — uses design tokens only.
 * Titles: text-text (white)
 * Descriptions: text-text-secondary
 * Labels: text-text-muted
 * Icons: text-primary
 */
export function EventCard({ event, isRecommended }: EventCardProps) {
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
          <Calendar className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-body font-bold text-text">{event.name}</h3>
          <span className="text-caption text-text-muted">{event.frequency}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-small text-text-secondary leading-relaxed">{event.description}</p>

      {/* Topics */}
      <div className="mb-4">
        <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-text-muted">Temáticas</p>
        <div className="flex flex-wrap gap-2">
          {event.topics.map((t) => (
            <span key={t} className="rounded-md border border-border bg-surface-hover px-2.5 py-1 text-caption font-medium text-text-secondary">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Audience */}
      <div className="mb-5">
        <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-text-muted">Público</p>
        <p className="text-small text-text-secondary">{event.audience}</p>
      </div>

      {/* CTA */}
      <a href={event.url} target="_blank" rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-surface-hover px-5 py-2.5 text-small font-semibold text-text transition-all duration-300 ease-elegant hover:bg-gradient-brand hover:text-background hover:shadow-glow">
        Saber más
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}
