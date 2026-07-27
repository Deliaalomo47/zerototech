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
 * Option card — Noxora Holographic.
 * Glass surface, mint glow on select, premium interaction.
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
          ? "border-mint/50 bg-mint-light shadow-glow-mint"
          : "glass-card border-border hover:-translate-y-0.5 hover:border-lavender/30 hover:shadow-hover"
      )}
      aria-pressed={isSelected}
    >
      {/* Icon */}
      <div className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-all duration-300",
        isSelected
          ? "bg-indigo text-mint shadow-glow-indigo"
          : "bg-indigo-faint text-indigo-muted group-hover:bg-lavender-light group-hover:text-indigo"
      )}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      {/* Text */}
      <span className={cn(
        "flex-1 text-body leading-relaxed",
        isSelected ? "text-indigo font-medium" : "text-indigo-muted"
      )}>
        {text}
      </span>

      {/* Check */}
      {isSelected && (
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint animate-scale-in">
          <Check className="h-3.5 w-3.5 text-indigo" strokeWidth={3} aria-hidden="true" />
        </div>
      )}
    </button>
  );
}
