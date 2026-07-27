import { Zap } from "lucide-react";
import type { XPLevel } from "../types";

const levels: XPLevel[] = [
  { level: 1, name: "Curioso/a", minXP: 0, maxXP: 50 },
  { level: 2, name: "Explorador/a", minXP: 50, maxXP: 150 },
  { level: 3, name: "Aprendiz", minXP: 150, maxXP: 300 },
  { level: 4, name: "Practicante", minXP: 300, maxXP: 500 },
  { level: 5, name: "Protagonista IT", minXP: 500, maxXP: 999 },
];

function getCurrentLevel(xp: number): XPLevel {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].minXP) return levels[i];
  }
  return levels[0];
}

interface XPBarProps {
  totalXP: number;
}

/**
 * XP bar — v3.
 *
 * Clean, compact, informative. No heavy decorations.
 */
export function XPBar({ totalXP }: XPBarProps) {
  const currentLevel = getCurrentLevel(totalXP);
  const progressInLevel = totalXP - currentLevel.minXP;
  const levelRange = currentLevel.maxXP - currentLevel.minXP;
  const progressPercent = Math.min(Math.round((progressInLevel / levelRange) * 100), 100);

  return (
    <div className="animate-fade-up-1 flex items-center gap-4 rounded-xl border border-neutral-200 bg-surface p-4">
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle">
        <Zap className="h-5 w-5 text-accent" aria-hidden="true" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-body-sm font-semibold text-neutral-900">
            Nivel {currentLevel.level}
          </span>
          <span className="text-caption text-neutral-400">
            {currentLevel.name}
          </span>
        </div>
        <div className="mt-1.5 flex items-center gap-2.5">
          <div
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100"
            role="progressbar"
            aria-valuenow={totalXP}
            aria-valuemin={currentLevel.minXP}
            aria-valuemax={currentLevel.maxXP}
          >
            <div
              className="h-full rounded-full bg-accent transition-all duration-500 ease-out-expo"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-caption font-semibold text-accent">
            {totalXP} XP
          </span>
        </div>
      </div>
    </div>
  );
}
