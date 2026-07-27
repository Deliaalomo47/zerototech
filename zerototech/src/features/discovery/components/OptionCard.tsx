import { Wrench, Cloud, Shield, Palette, Code, type LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Cloud,
  Shield,
  Palette,
  Code,
};

interface OptionCardProps {
  text: string;
  icon: string;
  isSelected: boolean;
  onSelect: () => void;
}

/**
 * Tarjeta de opción — rediseño v2.
 *
 * - Bordes más suaves y orgánicos (card radius)
 * - Efecto de selección con glow tintado
 * - Ícono con gradiente de fondo cuando activo
 * - Transición spring para el estado seleccionado
 * - Micro-lift más sutil y elegante
 */
export function OptionCard({ text, icon, isSelected, onSelect }: OptionCardProps) {
  const Icon = iconMap[icon] ?? Code;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group flex w-full items-center gap-4 rounded-card border-2 bg-surface p-5 text-left transition-all duration-300 ease-out-expo sm:p-6",
        isSelected
          ? "border-primary/50 shadow-glow scale-[1.01]"
          : "border-transparent shadow-card hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
      )}
      aria-pressed={isSelected}
    >
      {/* Ícono */}
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
          isSelected
            ? "bg-route shadow-soft text-white"
            : "bg-canvas-deep text-primary group-hover:bg-primary/10"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      {/* Texto */}
      <span
        className={cn(
          "text-sm font-medium leading-relaxed sm:text-base transition-colors duration-200",
          isSelected ? "text-dark font-semibold" : "text-dark-soft"
        )}
      >
        {text}
      </span>

      {/* Check indicator */}
      {isSelected && (
        <div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary animate-scaleIn">
          <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
}
