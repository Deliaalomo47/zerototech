import { Award } from "lucide-react";
import type { RoadmapData } from "../types";

interface ProfileCardProps {
  roadmap: RoadmapData;
}

/**
 * Profile card — Noxora Holographic.
 * Glass surface with depth, holographic orbs, premium celebration.
 */
export function ProfileCard({ roadmap }: ProfileCardProps) {
  return (
    <div className="relative animate-fade-up overflow-hidden rounded-2xl border border-border bg-surface-raised p-10 shadow-elevated backdrop-blur-glass sm:p-14">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb -top-20 -right-20 h-60 w-60 bg-mint-glow" />
        <div className="orb -bottom-16 -left-16 h-48 w-48 bg-peach-glow" />
      </div>

      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className="mb-6 inline-flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-indigo shadow-glow-indigo">
          <Award className="h-8 w-8 text-mint" aria-hidden="true" />
        </div>

        {/* Label */}
        <p className="mb-4 text-small font-semibold uppercase tracking-widest text-mint">
          Tu perfil descubierto
        </p>

        {/* Role name */}
        <h2 className="mb-5 font-display text-title text-indigo sm:text-[2.5rem]">
          {roadmap.roleName}
        </h2>

        {/* Message */}
        <p className="mx-auto max-w-md text-body text-muted leading-relaxed">
          {roadmap.motivationalMessage}
        </p>

        {/* Gradient divider */}
        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-route" />
      </div>
    </div>
  );
}
