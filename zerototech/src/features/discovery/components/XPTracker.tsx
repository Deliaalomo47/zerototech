import { cn } from "@/utils/cn";

interface XPTrackerProps {
  current: number;
  total: number;
  className?: string;
}

/**
 * Progress — Noxora Holographic.
 * Mint bar on indigo-faint track. Alive.
 */
export function XPTracker({ current, total, className }: XPTrackerProps) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className={cn("w-full", className)} role="progressbar"
      aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}
      aria-label={`Pregunta ${current} de ${total}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-small font-semibold text-indigo">
          Pregunta {current} de {total}
        </span>
        <span className="text-caption font-medium text-muted">{progress}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-indigo-faint">
        <div
          className="h-full rounded-full bg-mint shadow-glow-mint transition-all duration-500 ease-elegant"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
