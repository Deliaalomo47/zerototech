import { cn } from "@/utils/cn";
import type { ITCategory } from "@/features/discovery/types";

interface FilterOption {
  value: ITCategory | "all";
  label: string;
  emoji: string;
}

const filters: FilterOption[] = [
  { value: "all", label: "Todos", emoji: "🌐" },
  { value: "soporte", label: "Soporte", emoji: "🔧" },
  { value: "cloud", label: "Cloud", emoji: "☁️" },
  { value: "ciberseguridad", label: "Ciberseguridad", emoji: "🛡️" },
  { value: "ux-ui", label: "UX/UI", emoji: "🎨" },
  { value: "desarrollo", label: "Desarrollo", emoji: "💻" },
];

interface AreaFilterProps {
  selected: ITCategory | "all";
  onChange: (value: ITCategory | "all") => void;
}

/**
 * Filtro por áreas IT como pills horizontales con scroll en mobile.
 * Respeta el Design System: bordes redondeados, transiciones suaves, colores de marca.
 */
export function AreaFilter({ selected, onChange }: AreaFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-3"
      role="radiogroup"
      aria-label="Filtrar por área IT"
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          role="radio"
          aria-checked={selected === filter.value}
          onClick={() => onChange(filter.value)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-pill px-4 py-2 text-sm font-medium transition-all duration-200",
            selected === filter.value
              ? "bg-primary text-white shadow-soft"
              : "bg-surface text-dark-soft shadow-card hover:bg-primary/5 hover:text-primary hover:shadow-card-hover"
          )}
        >
          <span aria-hidden="true">{filter.emoji}</span>
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
