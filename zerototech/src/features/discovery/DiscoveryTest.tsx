import { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import type { ITCategory, QuizResult } from "./types";
import { quizQuestions } from "./data";
import { XPTracker, QuizStep, DiscoveryLoader } from "./components";

type QuizPhase = "quiz" | "loading" | "done";

interface DiscoveryTestProps {
  onComplete?: (result: QuizResult) => void;
}

/**
 * Discovery Test — v3.
 *
 * Clean container, tight spacing, Notion-like card feel.
 * No heavy shadows or glass effects — just clean surfaces.
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
      soporte: 0, cloud: 0, ciberseguridad: 0, "ux-ui": 0, desarrollo: 0,
    };
    for (const [stepIndex, optionId] of Object.entries(answers)) {
      const question = quizQuestions[Number(stepIndex)];
      const selectedOption = question?.options.find((o) => o.id === optionId);
      if (selectedOption) scores[selectedOption.category] += 1;
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
      }, 3200);
    }
  }, [currentStep, totalSteps, selectedOptionId, calculateResult, onComplete]);

  if (phase === "loading" || phase === "done") {
    return (
      <section id="discovery-test" className="mx-auto max-w-xl px-5 py-18 sm:px-6" aria-label="Calculando resultado">
        <DiscoveryLoader />
      </section>
    );
  }

  return (
    <section id="discovery-test" className="mx-auto max-w-xl px-5 py-18 sm:px-6" aria-label="Test de descubrimiento IT">
      {/* Card */}
      <div className="rounded-2xl border border-neutral-200 bg-surface p-6 shadow-md sm:p-8">
        <XPTracker current={currentStep + 1} total={totalSteps} className="mb-8" />

        <QuizStep
          key={currentQuestion.id}
          question={currentQuestion}
          selectedOptionId={selectedOptionId}
          onSelectOption={handleSelectOption}
        />

        {/* Next button */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            disabled={!selectedOptionId}
            className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-body-sm font-semibold text-white transition-all duration-200 ease-out-expo hover:bg-neutral-800 active:scale-[0.98] disabled:opacity-30 disabled:pointer-events-none"
          >
            {currentStep < totalSteps - 1 ? "Siguiente" : "Ver resultado"}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
