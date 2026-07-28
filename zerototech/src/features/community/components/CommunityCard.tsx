import { ExternalLink, Users } from "lucide-react";
import type { CommunityData } from "../types";

interface CommunityCardProps {
  community: CommunityData;
}

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <article className="glass-card rounded-2xl p-7 transition-all duration-300 ease-elegant hover:-translate-y-1 hover:shadow-hover">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-hover">
          <Users className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <h3 className="text-body font-bold text-green-400">{community.name}</h3>
      </div>

      <p className="mb-5 text-small text-slate-300 leading-relaxed">{community.description}</p>

      <div className="mb-5">
        <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-slate-400">Actividades</p>
        <div className="flex flex-wrap gap-2">
          {community.activities.map((a) => (
            <span key={a} className="rounded-md border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-caption font-medium text-slate-300">
              {a}
            </span>
          ))}
        </div>
      </div>

      <p className="mb-5 text-small text-slate-300">
        <span className="font-semibold text-slate-400">Para:</span> {community.audience}
      </p>

      <a
        href={community.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-green-500/10 border border-green-500/20 px-5 py-2.5 text-small font-semibold text-green-400 transition-all duration-300 hover:bg-green-500/20 hover:shadow-glow"
      >
        Explorar
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}
