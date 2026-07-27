import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const messages = [
  "Analizando tus respuestas...",
  "Encontrando tu camino...",
  "Casi listo...",
];

/**
 * Loader — Noxora final.
 * Calm, elegant. Mint accent.
 */
export function DiscoveryLoader() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % messages.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center animate-fade-up">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-light">
        <Sparkles className="h-6 w-6 text-indigo" aria-hidden="true" />
      </div>

      <h2 className="mb-3 font-display text-title text-indigo">
        Calculando tu perfil
      </h2>
      <p className="text-body text-muted" key={idx} aria-live="polite">
        {messages[idx]}
      </p>

      <div className="mt-10 h-1.5 w-48 overflow-hidden rounded-full bg-indigo-faint">
        <div className="h-full w-1/4 rounded-full bg-mint animate-slide-right" />
      </div>
    </div>
  );
}
