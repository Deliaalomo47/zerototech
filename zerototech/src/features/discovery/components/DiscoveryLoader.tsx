import { useEffect, useState } from "react";

const messages = [
  "Analizando tus respuestas...",
  "Encontrando tu camino...",
  "Casi listo...",
];

/**
 * Loader — v3.
 *
 * Raycast-inspired: clean, focused, no clutter.
 * Rotating message + minimal progress bar.
 */
export function DiscoveryLoader() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % messages.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center animate-fade-up">
      {/* Pulsing dot */}
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900">
        <div className="h-2.5 w-2.5 rounded-full bg-white animate-pulse-soft" />
      </div>

      {/* Message */}
      <p className="mb-3 font-display text-display-sm text-neutral-900">
        Calculando tu perfil
      </p>
      <p className="text-body-sm text-neutral-400" key={idx} aria-live="polite">
        {messages[idx]}
      </p>

      {/* Progress bar */}
      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-neutral-100">
        <div className="h-full w-1/4 rounded-full bg-neutral-900 animate-slide-loader" />
      </div>
    </div>
  );
}
