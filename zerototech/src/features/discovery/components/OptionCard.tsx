import { Wrench, Cloud, Shield, Palette, Code, Check, type LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

const iconMap: Record<string, LucideIcon> = { Wrench, Cloud, Shield, Palette, Code };

interface OptionCardProps {
  text: string;
  icon: string;
  isSelected: boolean;
  onSelect: () => void;
}

/**
 * Option card — v3.
 *
 * Notion-inspired: clean surface, subtle border, precise spacing.
 * Selected state uses ring + subtle bg shift, not heavy shadows.
 */
export function OptionCard({ text, icon, isSelected, onSelect }: OptionCardProps) {
  const Icon = iconMap[icon] ?? Code;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group flex w-full items-center gap-3.5 rounded-xl border p-4 text-left transition-all duration-200 ease-out-expo",
        isSelected
          ? "border-primary/40 bg-primary-subtle shadow-glow-primary"
          : "border-neutral-200 bg-surface hover:border-neutral-300 hover:bg-neutral-50"
      )}
      aria-pressed={isSelected}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200",
          isSelected ? "bg-primary text-white" : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200"
        )}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>

      {/* Text */}
      <span className={cn(
        "flex-1 text-body-sm leading-snug",
        isSelected ? "text-neutral-900 font-medium" : "text-neutral-600"
      )}>
        {text}
      </span>

      {/* Check */}
      {isSelected && (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary animate-scale-in">
          <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
        </div>
      )}
    </button>
  );
}
