import { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import type { ITCategory, QuizResult } from "./types";
import { quizQuestions } from "./data";
import { XPTracker, QuizStep, DiscoveryLoader } from "./components";

type QuizPhase = "quiz" | "loading" | "done";

interface DiscoveryTestProps {
  /** Callback cuando el quiz termina y hay un resultado */
  onComplete?: (result: QuizResult) => void;
}

/**
 * Sección principal del Test de Orientación "Cero-a-Tech".
 *
 * Maneja el estado completo del quiz:
 * 1. Navega entre preguntas guardando la respuesta seleccionada
 * 2. Al terminar, calcula la categoría con mayor puntaje
 * 3. Muestra un loader amigable antes de entregar el resultado
 */
export function DiscoveryTest({ onComplete }: DiscoveryTestProps) {
  const [phase, setPhase] = useState<QuizPhase>("quiz");
  const [currentStep, setCurrentStep] = useState(0);
  // Guarda el ID de la opción seleccionada por cada pregunta
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const totalSteps = quizQuestions.length;
  const currentQuestion = quizQuestions[currentStep];
  const selectedOptionId = answers[currentStep] ?? null;

  /** Guarda la opción seleccionada para la pregunta actual */
  const handleSelectOption = useCallback((optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionId }));
  }, [currentStep]);

  /** Calcula los puntajes y determina la categoría ganadora */
  const calculateResult = useCallback((): QuizResult => {
    const scores: Record<ITCategory, number> = {
      soporte: 0,
      cloud: 0,
      ciberseguridad: 0,
      "ux-ui": 0,
      desarrollo: 0,
    };

    // Recorre todas las respuestas y suma puntos por categoría
    for (const [stepIndex, optionId] of Object.entries(answers)) {
      const question = quizQuestions[Number(stepIndex)];
      const selectedOption = question?.options.find((o) => o.id === optionId);
      if (selectedOption) {
        scores[selectedOption.category] += 1;
      }
    }

    // Encuentra la categoría con mayor puntaje
    const winner = (Object.entries(scores) as [ITCategory, number][]).reduce(
      (max, entry) => (entry[1] > max[1] ? entry : max)
    )[0];

    return { winner, scores };
  }, [answers]);

  /** Avanza a la siguiente pregunta o finaliza el quiz */
  const handleNext = useCallback(() => {
    if (!selectedOptionId) return;

    if (currentStep < totalSteps - 1) {
      // Siguiente pregunta
      setCurrentStep((prev) => prev + 1);
    } else {
      // Última pregunta: mostrar loader y calcular resultado
      setPhase("loading");

      setTimeout(() => {
        const result = calculateResult();
        setPhase("done");
        onComplete?.(result);
      }, 3500);
    }
  }, [currentStep, totalSteps, selectedOptionId, calculateResult, onComplete]);

  // --- FASE: CARGANDO ---
  if (phase === "loading" || phase === "done") {
    return (
      <section
        id="discovery-test"
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6"
        aria-label="Calculando resultado del test"
      >
        <DiscoveryLoader />
      </section>
    );
  }

  // --- FASE: QUIZ ACTIVO ---
  return (
    <section
      id="discovery-test"
      className="mx-auto max-w-2xl px-4 py-16 sm:px-6"
      aria-label="Test de descubrimiento IT"
    >
      {/* Barra de progreso */}
      <XPTracker current={currentStep + 1} total={totalSteps} className="mb-10" />

      {/* Pregunta actual con opciones */}
      <QuizStep
        key={currentQuestion.id}
        question={currentQuestion}
        selectedOptionId={selectedOptionId}
        onSelectOption={handleSelectOption}
      />

      {/* Botón de avance */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          disabled={!selectedOptionId}
          className="group inline-flex items-center gap-2 rounded-btn-lg bg-primary px-7 py-3.5 font-display text-base font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-soft"
        >
          {currentStep < totalSteps - 1 ? "Siguiente" : "Ver mi perfil"}
          <ArrowRight
            className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}
