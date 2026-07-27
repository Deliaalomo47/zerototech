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
 * Area filter — Noxora Holographic.
 * Glass container, indigo active pill with glow, lavender hover.
 */
export function AreaFilter({ selected, onChange }: AreaFilterProps) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-xl border border-border bg-surface-glass p-1.5 backdrop-blur-xs shadow-soft"
      role="radiogroup"
      aria-label="Filtrar por área"
    >
      {filters.map((f) => (
        <button
          key={f.value}
          type="button"
          role="radio"
          aria-checked={selected === f.value}
          onClick={() => onChange(f.value)}
          className={cn(
            "rounded-lg px-4 py-2 text-small font-medium transition-all duration-300 ease-elegant",
            selected === f.value
              ? "bg-gradient-indigo text-white shadow-glow-indigo"
              : "text-muted hover:text-indigo hover:bg-lavender-light"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
