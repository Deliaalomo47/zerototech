import { MainLayout } from "@/layouts/MainLayout";
import { HeroSection } from "@/features/home";
import { DiscoveryTest } from "@/features/discovery";
import { ResultsPage, useProgress } from "@/features/results";
import { GuideSection } from "@/features/guide";
import type { QuizResult } from "@/features/discovery";

/**
 * Punto de entrada visual de ZeroToTech.
 *
 * Flujo completo:
 * 1. Hero Section (landing con CTA)
 * 2. Test de descubrimiento interactivo (4 preguntas)
 * 3. Resultado del perfil + Roadmap interactivo con XP
 * 4. Guía de Roles + Glosario IT
 *
 * El progreso se persiste en LocalStorage:
 * - Si el usuario ya hizo el test, ve directamente su resultado y roadmap.
 * - Si recarga la página, los nodos completados y XP se mantienen.
 * - El botón "Volver a hacer el test" limpia todo y reinicia.
 */
function App() {
  const {
    quizResult,
    totalXP,
    setQuizResult,
    completeNode,
    isNodeCompleted,
    resetProgress,
  } = useProgress();

  /** Cuando el quiz termina, guardamos el resultado en LocalStorage */
  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
  };

  return (
    <MainLayout>
      <HeroSection />

      {/* Sección del Test / Resultado */}
      {!quizResult ? (
        <DiscoveryTest onComplete={handleQuizComplete} />
      ) : (
        <ResultsPage
          result={quizResult}
          totalXP={totalXP}
          isNodeCompleted={isNodeCompleted}
          onMarkCompleted={completeNode}
          onReset={resetProgress}
        />
      )}

      {/* Sección 4: Guía de Roles y Glosario (siempre visible) */}
      <GuideSection />
    </MainLayout>
  );
}

export default App;
