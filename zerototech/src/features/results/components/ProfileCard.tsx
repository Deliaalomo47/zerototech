import { Award } from "lucide-react";
import type { RoadmapData } from "../types";

interface ProfileCardProps {
  roadmap: RoadmapData;
}

/**
 * Profile card — Noxora final.
 * Clean celebration. Lucide icon instead of emoji.
 * Generous whitespace, peach accent.
 */
export function ProfileCard({ roadmap }: ProfileCardProps) {
  return (
    <div className="animate-fade-up rounded-2xl border border-border bg-surface p-10 text-center shadow-card sm:p-14">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-peach-light">
        <Award className="h-8 w-8 text-peach-dark" aria-hidden="true" />
      </div>

      <p className="mb-3 text-small font-semibold uppercase tracking-widest text-mint-dark">
        Tu perfil descubierto
      </p>

      <h2 className="mb-5 font-display text-title text-indigo sm:text-[2.25rem]">
        {roadmap.roleName}
      </h2>

      <p className="mx-auto max-w-md text-body text-muted leading-relaxed">
        {roadmap.motivationalMessage}
      </p>

      <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-mint" />
    </div>
  );
}
