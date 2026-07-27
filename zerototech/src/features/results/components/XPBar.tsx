import { Zap, TrendingUp } from "lucide-react";
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
 * Barra de XP y nivel — rediseño v2.
 *
 * - Ícono con fondo gradiente dorado
 * - Barra de progreso con gradiente cálido
 * - Badge del nivel con personalidad
 * - Mejor layout y espaciado
 */
export function XPBar({ totalXP }: XPBarProps) {
  const currentLevel = getCurrentLevel(totalXP);
  const progressInLevel = totalXP - currentLevel.minXP;
  const levelRange = currentLevel.maxXP - currentLevel.minXP;
  const progressPercent = Math.min(Math.round((progressInLevel / levelRange) * 100), 100);

  return (
    <div className="animate-fadeInUp-delay-1 rounded-card border border-white/60 bg-surface/80 p-5 shadow-card backdrop-blur-sm sm:p-6">
      <div className="flex items-center gap-4">
        {/* Ícono con gradiente */}
        <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-route-warm shadow-soft">
          <Zap className="h-6 w-6 text-white" aria-hidden="true" />
        </div>

        {/* Info de nivel */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-lg font-bold text-dark">
              Nivel {currentLevel.level}
            </span>
            <span className="rounded-pill bg-warning/15 px-2.5 py-0.5 text-xs font-bold text-accent-dark">
              {currentLevel.name}
            </span>
          </div>

          {/* Barra */}
          <div className="mt-2.5 flex items-center gap-3">
            <div
              className="h-2.5 flex-1 overflow-hidden rounded-pill bg-canvas-deep/50"
              role="progressbar"
              aria-valuenow={totalXP}
              aria-valuemin={currentLevel.minXP}
              aria-valuemax={currentLevel.maxXP}
              aria-label={`Experiencia: ${totalXP} XP, nivel ${currentLevel.level}`}
            >
              <div
                className="h-full rounded-pill bg-route-warm transition-all duration-700 ease-out-expo"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex shrink-0 items-center gap-1 text-sm font-bold text-accent-dark">
              <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
              {totalXP} XP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
