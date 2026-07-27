import type { RoadmapData } from "../types";

interface ProfileCardProps {
  roadmap: RoadmapData;
}

/**
 * Profile result card — v3.
 *
 * Clerk-inspired success state: clean, celebratory without noise.
 * Big emoji, tight copy, gradient accent line.
 */
export function ProfileCard({ roadmap }: ProfileCardProps) {
  return (
    <div className="animate-fade-up rounded-2xl border border-neutral-200 bg-surface p-8 text-center shadow-lg sm:p-12">
      {/* Emoji */}
      <div className="mb-5 text-6xl animate-float" aria-hidden="true">
        {roadmap.roleEmoji}
      </div>

      {/* Label */}
      <p className="mb-3 text-caption font-semibold uppercase tracking-widest text-primary">
        Tu perfil descubierto
      </p>

      {/* Role name */}
      <h2 className="mb-4 font-display text-display-md text-neutral-900">
        {roadmap.roleName}
      </h2>

      {/* Motivational message */}
      <p className="mx-auto max-w-md text-body-md text-neutral-500">
        {roadmap.motivationalMessage}
      </p>

      {/* Gradient accent line */}
      <div className="mx-auto mt-8 h-0.5 w-16 rounded-full bg-gradient-brand" />
    </div>
  );
}
