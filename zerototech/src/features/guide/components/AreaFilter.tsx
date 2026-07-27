import { cn } from "@/utils/cn";
import type { ITCategory } from "@/features/discovery/types";

interface FilterOption {
  value: ITCategory | "all";
  label: string;
}

const filters: FilterOption[] = [
  { value: "all", label: "Todos" },
  { value: "soporte", label: "Soporte" },
  { value: "cloud", label: "Cloud" },
  { value: "ciberseguridad", label: "Seguridad" },
  { value: "ux-ui", label: "UX/UI" },
  { value: "desarrollo", label: "Dev" },
];

interface AreaFilterProps {
  selected: ITCategory | "all";
  onChange: (value: ITCategory | "all") => void;
}

/**
 * Area filter — v3.
 *
 * Arc/Linear-inspired: tab-like pills, no emojis (cleaner),
 * subtle active state with dark bg.
 */
export function AreaFilter({ selected, onChange }: AreaFilterProps) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-xl bg-neutral-100 p-1"
      role="radiogroup"
      aria-label="Filtrar por área"
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          role="radio"
          aria-checked={selected === filter.value}
          onClick={() => onChange(filter.value)}
          className={cn(
            "rounded-lg px-3.5 py-1.5 text-body-sm font-medium transition-all duration-200 ease-out-expo",
            selected === filter.value
              ? "bg-neutral-900 text-white shadow-sm"
              : "text-neutral-500 hover:text-neutral-700"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
