import type { QuizQuestion as QuizQuestionType } from "../types";
import { OptionCard } from "./OptionCard";

interface QuizStepProps {
  question: QuizQuestionType;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
}

/**
 * Quiz step — v3.
 *
 * Tight hierarchy: question → hint → options.
 * Stagger animation on options for rhythm.
 */
export function QuizStep({ question, selectedOptionId, onSelectOption }: QuizStepProps) {
  return (
    <div className="animate-fade-up">
      {/* Question */}
      <h2 className="mb-2 font-display text-display-sm text-neutral-900">
        {question.question}
      </h2>

      {/* Hint */}
      {question.hint && (
        <p className="mb-7 text-body-sm text-neutral-400">{question.hint}</p>
      )}

      {/* Options */}
      <div className="stagger flex flex-col gap-2.5">
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
