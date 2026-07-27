import { Zap } from "lucide-react";
import type { XPLevel } from "../types";

/**
 * Definición de niveles por XP acumulado.
 */
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
 * Barra de nivel y XP que se muestra en la parte superior de la sección de resultados.
 * Muestra el nivel actual, nombre, XP acumulado y progreso hasta el siguiente nivel.
 */
export function XPBar({ totalXP }: XPBarProps) {
  const currentLevel = getCurrentLevel(totalXP);
  const progressInLevel = totalXP - currentLevel.minXP;
  const levelRange = currentLevel.maxXP - currentLevel.minXP;
  const progressPercent = Math.min(Math.round((progressInLevel / levelRange) * 100), 100);

  return (
    <div className="rounded-card bg-surface p-5 shadow-card sm:p-6">
      <div className="flex items-center gap-4">
        {/* Ícono de nivel */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/20">
          <Zap className="h-6 w-6 text-warning" aria-hidden="true" />
        </div>

        {/* Info de nivel */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-bold text-dark">
              Nivel {currentLevel.level}
            </span>
            <span className="text-sm font-medium text-dark-soft">
              {currentLevel.name}
            </span>
          </div>

          {/* Barra de progreso */}
          <div className="mt-2 flex items-center gap-3">
            <div
              className="h-2.5 flex-1 overflow-hidden rounded-pill bg-warning/20"
              role="progressbar"
              aria-valuenow={totalXP}
              aria-valuemin={currentLevel.minXP}
              aria-valuemax={currentLevel.maxXP}
              aria-label={`Experiencia: ${totalXP} XP, nivel ${currentLevel.level}`}
            >
              <div
                className="h-full rounded-pill bg-warning transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="shrink-0 text-sm font-bold text-warning">
              {totalXP} XP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
