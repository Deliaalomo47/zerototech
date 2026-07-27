import { useEffect, useState } from "react";
import { Sparkles, Compass, Rocket } from "lucide-react";

const loadingStages = [
  { message: "Estamos descubriendo qué área IT puede gustarte...", icon: Compass, emoji: "🔍" },
  { message: "Preparando tu ruta personalizada...", icon: Sparkles, emoji: "✨" },
  { message: "Ya casi terminamos...", icon: Rocket, emoji: "🚀" },
];

/**
 * Pantalla de carga — rediseño v2.
 *
 * - Animación más sofisticada (orbs flotantes + shimmer)
 * - Mensajes rotativos con transición suave
 * - Barra de progreso con gradiente
 * - Ícono central con efecto de glow pulsante
 * - Se siente como un momento de anticipación positiva
 */
export function DiscoveryLoader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % loadingStages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = loadingStages[stage];
  const Icon = current.icon;

  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center text-center animate-fadeInUp">
      {/* Orbs decorativos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/4 top-1/3 h-40 w-40 rounded-full bg-violet/8 blur-[80px] animate-float" />
        <div className="absolute right-1/4 bottom-1/3 h-32 w-32 rounded-full bg-secondary/10 blur-[60px] animate-float [animation-delay:1.5s]" />
      </div>

      {/* Ícono central con glow */}
      <div className="relative mb-10">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulseGlow" aria-hidden="true" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-surface shadow-elevated">
          <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
        </div>
      </div>

      {/* Título */}
      <h2 className="mb-5 font-display text-2xl font-bold text-dark sm:text-3xl">
        Calculando tu perfil...
      </h2>

      {/* Mensaje rotativo */}
      <p className="mb-8 text-lg text-dark-soft animate-fadeIn" key={stage} aria-live="polite">
        {current.emoji} {current.message}
      </p>

      {/* Barra de progreso con gradiente */}
      <div className="h-2 w-72 overflow-hidden rounded-pill bg-canvas-deep/60">
        <div className="h-full w-1/3 rounded-pill bg-route animate-slideLoader" />
      </div>
    </div>
  );
}
