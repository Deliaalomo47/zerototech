import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const loadingMessages = [
  "🔍 Estamos descubriendo qué área IT puede gustarte...",
  "☁️ Preparando tu ruta personalizada...",
  "🚀 Ya casi terminamos...",
];

/**
 * Pantalla de carga amigable que acompaña al usuario mientras se
 * "calcula" su perfil IT. Muestra mensajes rotativos positivos
 * en vez de un spinner genérico.
 */
export function DiscoveryLoader() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center animate-fadeInUp">
      {/* Ícono animado */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 animate-pulse">
        <Sparkles className="h-10 w-10 text-primary" aria-hidden="true" />
      </div>

      {/* Título */}
      <h2 className="mb-4 font-display text-2xl font-bold text-dark sm:text-3xl">
        Calculando tu perfil...
      </h2>

      {/* Mensaje rotativo */}
      <p
        className="text-lg text-dark-soft transition-opacity duration-300"
        aria-live="polite"
      >
        {loadingMessages[messageIndex]}
      </p>

      {/* Barra de progreso indeterminada */}
      <div className="mt-8 h-2 w-64 overflow-hidden rounded-pill bg-secondary/20">
        <div className="h-full w-1/3 animate-slideLoader rounded-pill bg-secondary" />
      </div>
    </div>
  );
}
