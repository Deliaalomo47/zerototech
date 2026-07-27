import type { QuizQuestion as QuizQuestionType } from "../types";
import { OptionCard } from "./OptionCard";

interface QuizStepProps {
  /** Datos de la pregunta actual */
  question: QuizQuestionType;
  /** ID de la opción seleccionada (si hay) */
  selectedOptionId: string | null;
  /** Callback al seleccionar una opción */
  onSelectOption: (optionId: string) => void;
}

/**
 * Renderiza una pregunta del quiz con sus opciones como tarjetas interactivas.
 * Incluye animación de entrada (fade in + slide up).
 */
export function QuizStep({ question, selectedOptionId, onSelectOption }: QuizStepProps) {
  return (
    <div className="animate-fadeInUp">
      {/* Pregunta */}
      <h2 className="mb-2 font-display text-2xl font-bold text-dark sm:text-3xl">
        {question.question}
      </h2>

      {/* Hint empático */}
      {question.hint && (
        <p className="mb-8 text-base text-dark-soft">{question.hint}</p>
      )}

      {/* Opciones */}
      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <OptionCard
            key={option.id}
            text={option.text}
            icon={option.icon}
            isSelected={selectedOptionId === option.id}
            onSelect={() => onSelectOption(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
