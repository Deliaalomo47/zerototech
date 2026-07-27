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
 * Option card — Noxora final.
 *
 * Generous padding, soft border, subtle elevation on select.
 * No heavy shadows. Clean and inviting.
 */
export function OptionCard({ text, icon, isSelected, onSelect }: OptionCardProps) {
  const Icon = iconMap[icon] ?? Code;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group flex w-full items-center gap-4 rounded-xl border-2 p-5 text-left transition-all duration-300 ease-elegant",
        isSelected
          ? "border-mint bg-mint-light shadow-glow"
          : "border-border bg-surface hover:border-indigo/15 hover:shadow-soft hover:-translate-y-px"
      )}
      aria-pressed={isSelected}
    >
      <div className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300",
        isSelected ? "bg-indigo text-mint" : "bg-indigo-faint text-indigo-muted group-hover:bg-indigo/5"
      )}>
        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
      </div>

      <span className={cn(
        "flex-1 text-body",
        isSelected ? "text-indigo font-medium" : "text-indigo-muted"
      )}>
        {text}
      </span>

      {isSelected && (
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint animate-scale-in">
          <Check className="h-3.5 w-3.5 text-indigo" strokeWidth={3} aria-hidden="true" />
        </div>
      )}
    </button>
  );
}
