import { MainLayout } from "@/layouts/MainLayout";
import { HeroSection } from "@/features/home";
import { DiscoveryTest } from "@/features/discovery";
import { ResultsPage, useProgress } from "@/features/results";
import { GuideSection } from "@/features/guide";
import { CompaniesSection } from "@/features/companies";
import { CommunitySection } from "@/features/community";
import type { QuizResult } from "@/features/discovery";

/**
 * ZeroToTech — Plataforma de exploración IT.
 *
 * Estructura por secciones:
 * 1. Inicio (Hero)
 * 2. Descubrí tu pasión (Test + Resultado/Roadmap)
 * 3. Roles IT (Guía de roles)
 * 4. Empresas (Argentinas + Internacionales)
 * 5. Comunidad (Comunidades tech)
 * 6. Roadmap (dentro de ResultsPage si completó el test)
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

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
  };

  return (
    <MainLayout>
      {/* 1. Inicio */}
      <HeroSection />

      {/* 2. Descubrí tu pasión */}
      <div id="descubri">
        {!quizResult ? (
          <DiscoveryTest onComplete={handleQuizComplete} />
        ) : (
          <div id="roadmap">
            <ResultsPage
              result={quizResult}
              totalXP={totalXP}
              isNodeCompleted={isNodeCompleted}
              onMarkCompleted={completeNode}
              onReset={resetProgress}
            />
          </div>
        )}
      </div>

      {/* 3. Roles IT */}
      <div id="roles">
        <GuideSection />
      </div>

      {/* 4. Empresas */}
      <CompaniesSection />

      {/* 5. Comunidad */}
      <CommunitySection />
    </MainLayout>
  );
}

export default App;
