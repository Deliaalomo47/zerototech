import { cn } from "@/utils/cn";

interface XPTrackerProps {
  current: number;
  total: number;
  className?: string;
}

/**
 * Progress bar — v3.
 *
 * Linear-inspired: minimal, precise, informative.
 * Segmented dots show steps, thin bar shows progress.
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
      aria-label={`Pregunta ${current} de ${total}`}
    >
      <div className="mb-3 flex items-center justify-between">
        {/* Step indicators */}
        <div className="flex items-center gap-1">
          {Array.from({ length: total }, (_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 ease-out-expo",
                i < current ? "w-5 bg-primary" : "w-1.5 bg-neutral-200"
              )}
            />
          ))}
        </div>
        <span className="text-caption font-medium text-neutral-400">
          {current} de {total}
        </span>
      </div>

      {/* Bar */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out-expo"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
