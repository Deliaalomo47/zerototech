import { cn } from "@/utils/cn";

interface XPTrackerProps {
  /** Paso actual (1-indexed) */
  current: number;
  /** Total de pasos */
  total: number;
  className?: string;
}

/**
 * Barra de progreso animada para el quiz.
 * Usa el color Secondary (#7FFFD0 — menta) para transmitir avance positivo.
 */
export function XPTracker({ current, total, className }: XPTrackerProps) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className={cn("w-full", className)} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={`Progreso: pregunta ${current} de ${total}`}>
      {/* Indicador de texto */}
      <div className="mb-2 flex items-center justify-between text-sm font-medium">
        <span className="text-dark-soft">
          Pregunta <span className="font-bold text-dark">{current}</span> de {total}
        </span>
        <span className="text-dark-soft">{progress}%</span>
      </div>

      {/* Barra de fondo */}
      <div className="h-3 w-full overflow-hidden rounded-pill bg-secondary/20">
        {/* Barra de progreso con animación */}
        <div
          className="h-full rounded-pill bg-secondary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
