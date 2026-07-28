import { ExternalLink, Users } from "lucide-react";
import type { CommunityData } from "../types";

interface CommunityCardProps {
  community: CommunityData;
}

/**
 * CommunityCard — uses design tokens only.
 * Titles: text-text (white)
 * Descriptions: text-text-secondary
 * Labels: text-text-muted
 * Icons: text-accent or text-primary
 */
export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <article className="glass-card rounded-2xl p-7 transition-all duration-300 ease-elegant hover:-translate-y-1 hover:shadow-hover">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-hover">
          <Users className="h-5 w-5 text-accent" aria-hidden="true" />
        </div>
        <h3 className="text-body font-bold text-text">{community.name}</h3>
      </div>

      {/* Description */}
      <p className="mb-5 text-small text-text-secondary leading-relaxed">{community.description}</p>

      {/* Activities */}
      <div className="mb-5">
        <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-text-muted">Actividades</p>
        <div className="flex flex-wrap gap-2">
          {community.activities.map((a) => (
            <span key={a} className="rounded-md border border-border bg-surface-hover px-2.5 py-1 text-caption font-medium text-text-secondary">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Audience */}
      <p className="mb-5 text-small text-text-secondary">
        <span className="font-semibold text-text-muted">Para:</span> {community.audience}
      </p>

      {/* CTA */}
      <a
        href={community.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-surface-hover px-5 py-2.5 text-small font-semibold text-text transition-all duration-300 ease-elegant hover:bg-gradient-brand hover:text-background hover:shadow-glow"
      >
        Explorar
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}
