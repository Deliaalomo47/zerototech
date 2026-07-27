import { useState, useCallback } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ITCategory, QuizResult } from "./types";
import { quizQuestions } from "./data";
import { XPTracker, QuizStep, DiscoveryLoader } from "./components";

type QuizPhase = "quiz" | "loading" | "done";

interface DiscoveryTestProps {
  onComplete?: (result: QuizResult) => void;
}

/**
 * Test de Orientación "Cero-a-Tech" — rediseño v2.
 *
 * Mejoras visuales:
 * - Contenedor con glass-card y más presencia
 * - Botón con estados más expresivos
 * - Mejor estructura visual (card envolvente)
 * - Transiciones más fluidas entre pasos
 */
export function DiscoveryTest({ onComplete }: DiscoveryTestProps) {
  const [phase, setPhase] = useState<QuizPhase>("quiz");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const totalSteps = quizQuestions.length;
  const currentQuestion = quizQuestions[currentStep];
  const selectedOptionId = answers[currentStep] ?? null;

  const handleSelectOption = useCallback((optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionId }));
  }, [currentStep]);

  const calculateResult = useCallback((): QuizResult => {
    const scores: Record<ITCategory, number> = {
      soporte: 0,
      cloud: 0,
      ciberseguridad: 0,
      "ux-ui": 0,
      desarrollo: 0,
    };

    for (const [stepIndex, optionId] of Object.entries(answers)) {
      const question = quizQuestions[Number(stepIndex)];
      const selectedOption = question?.options.find((o) => o.id === optionId);
      if (selectedOption) {
        scores[selectedOption.category] += 1;
      }
    }

    const winner = (Object.entries(scores) as [ITCategory, number][]).reduce(
      (max, entry) => (entry[1] > max[1] ? entry : max)
    )[0];

    return { winner, scores };
  }, [answers]);

  const handleNext = useCallback(() => {
    if (!selectedOptionId) return;

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setPhase("loading");
      setTimeout(() => {
        const result = calculateResult();
        setPhase("done");
        onComplete?.(result);
      }, 3500);
    }
  }, [currentStep, totalSteps, selectedOptionId, calculateResult, onComplete]);

  // --- LOADING ---
  if (phase === "loading" || phase === "done") {
    return (
      <section
        id="discovery-test"
        className="relative mx-auto max-w-2xl px-5 py-20 sm:px-8"
        aria-label="Calculando resultado del test"
      >
        <DiscoveryLoader />
      </section>
    );
  }

  // --- QUIZ ---
  return (
    <section
      id="discovery-test"
      className="mx-auto max-w-2xl px-5 py-20 sm:px-8"
      aria-label="Test de descubrimiento IT"
    >
      {/* Card envolvente */}
      <div className="rounded-card-lg border border-white/60 bg-surface/60 p-6 shadow-elevated backdrop-blur-sm sm:p-10">
        {/* Barra de progreso */}
        <XPTracker current={currentStep + 1} total={totalSteps} className="mb-10" />

        {/* Pregunta actual */}
        <QuizStep
          key={currentQuestion.id}
          question={currentQuestion}
          selectedOptionId={selectedOptionId}
          onSelectOption={handleSelectOption}
        />

        {/* Botón de avance */}
        <div className="mt-10 flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            disabled={!selectedOptionId}
            className="group inline-flex items-center gap-2.5 rounded-btn-lg bg-primary px-7 py-4 font-display text-base font-bold text-white shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-glow active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none disabled:hover:translate-y-0"
          >
            {currentStep < totalSteps - 1 ? (
              <>
                Siguiente
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </>
            ) : (
              <>
                Ver mi perfil
                <CheckCircle2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
