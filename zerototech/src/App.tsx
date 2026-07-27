import { useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { HeroSection } from "@/features/home";
import { DiscoveryTest, categoryInfo } from "@/features/discovery";
import type { QuizResult } from "@/features/discovery";

/**
 * Punto de entrada visual de ZeroToTech.
 *
 * Renderiza el layout principal con:
 * 1. Hero Section (landing)
 * 2. Test de descubrimiento interactivo
 * 3. Resultado (cuando el quiz termina)
 */
function App() {
  const [result, setResult] = useState<QuizResult | null>(null);

  return (
    <MainLayout>
      <HeroSection />

      {/* Sección del Test de Descubrimiento */}
      {!result ? (
        <DiscoveryTest onComplete={setResult} />
      ) : (
        <section
          id="discovery-test"
          className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 animate-fadeInUp"
          aria-label="Resultado del test"
        >
          <div className="rounded-card bg-surface p-8 shadow-card sm:p-12">
            <p className="mb-4 text-5xl">{categoryInfo[result.winner].emoji}</p>
            <h2 className="mb-3 font-display text-3xl font-extrabold text-dark sm:text-4xl">
              ¡Tu perfil IT es...
            </h2>
            <p className="mb-6 font-display text-2xl font-bold text-primary sm:text-3xl">
              {categoryInfo[result.winner].name}
            </p>
            <p className="text-lg text-dark-soft">
              Según tus respuestas, tenés una afinidad natural con este campo.
              ¡Esto es solo el comienzo de tu camino!
            </p>
          </div>
        </section>
      )}
    </MainLayout>
  );
}

export default App;
