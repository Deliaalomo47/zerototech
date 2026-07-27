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
 * Area filter — Noxora final.
 * Segmented control, indigo active pill. No emojis.
 */
export function AreaFilter({ selected, onChange }: AreaFilterProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-xl bg-indigo-faint p-1"
      role="radiogroup" aria-label="Filtrar por área">
      {filters.map((f) => (
        <button key={f.value} type="button" role="radio"
          aria-checked={selected === f.value}
          onClick={() => onChange(f.value)}
          className={cn(
            "rounded-lg px-4 py-2 text-small font-medium transition-all duration-300 ease-elegant",
            selected === f.value
              ? "bg-indigo text-white shadow-soft"
              : "text-muted hover:text-indigo"
          )}>
          {f.label}
        </button>
      ))}
    </div>
  );
}
