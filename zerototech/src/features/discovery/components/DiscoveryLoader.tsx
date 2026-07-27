import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const messages = [
  "Analizando tus respuestas...",
  "Encontrando tu camino...",
  "Preparando tu perfil...",
];

/**
 * Loader — Noxora Holographic.
 * Alive with glowing orbs and gradient progress.
 */
export function DiscoveryLoader() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % messages.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative flex min-h-[50vh] flex-col items-center justify-center text-center animate-fade-up">
      {/* Background orbs */}
      <div className="orb top-1/4 left-1/3 h-48 w-48 bg-lavender-glow animate-float" aria-hidden="true" />
      <div className="orb bottom-1/4 right-1/3 h-40 w-40 bg-mint-glow animate-float-slow" aria-hidden="true" />

      {/* Icon */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-2xl bg-mint/20 blur-2xl animate-glow-pulse" aria-hidden="true" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-indigo shadow-elevated">
          <Sparkles className="h-7 w-7 text-mint" aria-hidden="true" />
        </div>
      </div>

      <h2 className="mb-3 font-display text-title-sm text-indigo">
        Calculando tu perfil
      </h2>
      <p className="text-body text-muted animate-fade-in" key={idx} aria-live="polite">
        {messages[idx]}
      </p>

      {/* Progress bar with gradient */}
      <div className="mt-10 h-2 w-56 overflow-hidden rounded-full bg-indigo-faint">
        <div className="h-full w-1/3 rounded-full bg-gradient-route animate-slide-right" />
      </div>
    </div>
  );
}
