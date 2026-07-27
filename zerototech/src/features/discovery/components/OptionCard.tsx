import { Wrench, Cloud, Shield, Palette, Code, type LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

/** Mapa de nombres de íconos a componentes Lucide */
const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Cloud,
  Shield,
  Palette,
  Code,
};

interface OptionCardProps {
  /** Texto de la opción */
  text: string;
  /** Nombre del ícono de Lucide */
  icon: string;
  /** Si la opción está seleccionada */
  isSelected: boolean;
  /** Callback al hacer clic */
  onSelect: () => void;
}

/**
 * Tarjeta interactiva de opción de respuesta.
 *
 * - Fondo blanco (surface) con sombra suave
 * - Elevación y borde azul al hover
 * - Estado seleccionado con borde primary y fondo sutil
 * - Transiciones de 200ms como indica el Design System
 */
export function OptionCard({ text, icon, isSelected, onSelect }: OptionCardProps) {
  const Icon = iconMap[icon] ?? Code;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group flex w-full items-start gap-4 rounded-card border-2 bg-surface p-5 text-left shadow-card transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-card-hover",
        isSelected
          ? "border-primary bg-primary/5 shadow-card-hover"
          : "border-transparent hover:border-primary/30"
      )}
      aria-pressed={isSelected}
    >
      {/* Ícono */}
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-btn transition-colors duration-200",
          isSelected
            ? "bg-primary text-white"
            : "bg-primary/10 text-primary group-hover:bg-primary/20"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      {/* Texto */}
      <span className="pt-1 text-sm font-medium leading-relaxed text-dark sm:text-base">
        {text}
      </span>
    </button>
  );
}
