import type { QuizQuestion as QuizQuestionType } from "../types";
import { OptionCard } from "./OptionCard";

interface QuizStepProps {
  question: QuizQuestionType;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
}

/**
 * Vista de una pregunta del quiz — rediseño v2.
 *
 * - Animación de entrada más expresiva
 * - Mejor jerarquía visual entre pregunta y hint
 * - Opciones con stagger animation
 * - Más aire entre elementos
 */
export function QuizStep({ question, selectedOptionId, onSelectOption }: QuizStepProps) {
  return (
    <div className="animate-fadeInUp">
      {/* Número de pregunta como indicador visual */}
      <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
        {question.id}
      </div>

      {/* Pregunta */}
      <h2 className="mb-3 font-display text-2xl font-bold leading-snug text-dark sm:text-3xl">
        {question.question}
      </h2>

      {/* Hint empático */}
      {question.hint && (
        <p className="mb-8 text-base leading-relaxed text-dark-muted">
          {question.hint}
        </p>
      )}

      {/* Opciones con efecto stagger */}
      <div className="stagger-children flex flex-col gap-3">
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
