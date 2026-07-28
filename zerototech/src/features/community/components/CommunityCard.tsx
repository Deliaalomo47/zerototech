import { ExternalLink, Users } from "lucide-react";
import { cn } from "@/utils/cn";
import type { CommunityData } from "../types";

interface CommunityCardProps {
  community: CommunityData;
}

const accentStyles = {
  mint: { bg: "bg-mint-light", text: "text-accent", border: "border-mint/30" },
  lavender: { bg: "bg-lavender-light", text: "text-primary", border: "border-lavender/30" },
  peach: { bg: "bg-peach-light", text: "text-accent", border: "border-peach/30" },
};

/**
 * Community card — Noxora Holographic.
 */
export function CommunityCard({ community }: CommunityCardProps) {
  const accent = accentStyles[community.accent];

  return (
    <article className="glass-card rounded-2xl p-7 transition-all duration-300 ease-elegant hover:-translate-y-1 hover:shadow-hover">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", accent.bg)}>
          <Users className={cn("h-5 w-5", accent.text)} aria-hidden="true" />
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
            <span key={a} className={cn("rounded-md border px-2.5 py-1 text-caption font-medium text-text-secondary", accent.border, accent.bg)}>
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Audience */}
      <p className="mb-5 text-small text-muted">
        <span className="font-semibold text-indigo-muted">Para:</span> {community.audience}
      </p>

      {/* CTA */}
      <a
        href={community.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-indigo-faint px-5 py-2.5 text-small font-semibold text-indigo transition-all duration-300 ease-elegant hover:bg-gradient-indigo hover:text-white hover:shadow-soft"
      >
        Explorar
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}
