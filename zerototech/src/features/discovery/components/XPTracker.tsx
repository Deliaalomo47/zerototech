import { cn } from "@/utils/cn";

interface XPTrackerProps {
  current: number;
  total: number;
  className?: string;
}

/**
 * Barra de progreso del quiz — rediseño v2.
 *
 * - Indicadores de paso como dots interactivos
 * - Barra con gradiente animado (no color plano)
 * - Texto más cálido y legible
 * - Micro-animación al avanzar
 */
export function XPTracker({ current, total, className }: XPTrackerProps) {
  const progress = Math.round((current / total) * 100);

  return (
    <div
      className={cn("w-full", className)}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progreso: pregunta ${current} de ${total}`}
    >
      {/* Step dots + text */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }, (_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 rounded-pill transition-all duration-400 ease-out-expo",
                i < current
                  ? "w-6 bg-primary"
                  : i === current
                    ? "w-4 bg-primary/40"
                    : "w-2 bg-dark/10"
              )}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-dark-soft">
          {current}/{total}
        </span>
      </div>

      {/* Main progress bar */}
      <div className="h-2 w-full overflow-hidden rounded-pill bg-canvas-deep/60">
        <div
          className="h-full rounded-pill bg-route transition-all duration-500 ease-out-expo"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
