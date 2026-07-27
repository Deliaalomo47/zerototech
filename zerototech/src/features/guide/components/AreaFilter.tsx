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
 * Filtro por áreas — rediseño v2.
 *
 * - Pills con bordes más suaves y backdrop blur
 * - Estado activo con gradiente de fondo
 * - Mejor espaciado y peso visual
 * - Scroll horizontal en mobile con hide scrollbar
 */
export function AreaFilter({ selected, onChange }: AreaFilterProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2 sm:gap-2.5"
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
            "inline-flex items-center gap-2 rounded-pill px-4 py-2.5 text-sm font-semibold transition-all duration-300 ease-out-expo",
            selected === filter.value
              ? "bg-route text-white shadow-soft scale-[1.02]"
              : "border border-dark/8 bg-surface text-dark-soft shadow-card hover:border-primary/20 hover:text-dark hover:shadow-card-hover hover:-translate-y-0.5"
          )}
        >
          <span aria-hidden="true" className="text-base">{filter.emoji}</span>
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
