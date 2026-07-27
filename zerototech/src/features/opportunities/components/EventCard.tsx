import { Calendar, ExternalLink, Heart } from "lucide-react";
import type { EventData } from "../types";

interface EventCardProps {
  event: EventData;
  isRecommended?: boolean;
}

/**
 * EventCard — reusable card for tech events.
 */
export function EventCard({ event, isRecommended }: EventCardProps) {
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
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-light">
          <Calendar className="h-5 w-5 text-indigo" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-body font-bold text-indigo">{event.name}</h3>
          <span className="text-caption text-muted">{event.frequency}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-small text-muted leading-relaxed">{event.description}</p>

      {/* Topics */}
      <div className="mb-4">
        <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-indigo-muted">Temáticas</p>
        <div className="flex flex-wrap gap-2">
          {event.topics.map((t) => (
            <span key={t} className="rounded-md border border-border bg-lavender-light px-2.5 py-1 text-caption font-medium text-indigo">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Audience */}
      <div className="mb-5">
        <p className="mb-1.5 text-caption font-semibold uppercase tracking-wider text-indigo-muted">Público</p>
        <p className="text-small text-muted">{event.audience}</p>
      </div>

      {/* CTA */}
      <a href={event.url} target="_blank" rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-indigo-faint px-5 py-2.5 text-small font-semibold text-indigo transition-all duration-300 ease-elegant hover:bg-gradient-indigo hover:text-white hover:shadow-soft">
        Saber más
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}
