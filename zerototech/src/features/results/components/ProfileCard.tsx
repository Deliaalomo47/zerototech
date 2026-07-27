import { Sparkles, PartyPopper } from "lucide-react";
import type { RoadmapData } from "../types";

interface ProfileCardProps {
  roadmap: RoadmapData;
}

/**
 * Tarjeta de resultado del perfil — rediseño v2.
 *
 * - Efecto de celebración con gradiente de fondo
 * - Emoji con animación float
 * - Mejor jerarquía tipográfica
 * - Separador con gradiente de marca
 * - Más espacio emocional para que el momento se sienta importante
 */
export function ProfileCard({ roadmap }: ProfileCardProps) {
  return (
    <div className="relative animate-fadeInUp overflow-hidden rounded-card-lg bg-surface p-8 shadow-elevated sm:p-12">
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/8 blur-[60px]" />
      </div>

      <div className="relative z-10">
        {/* Emoji del rol — con float */}
        <div className="mb-6 flex justify-center">
          <span className="text-7xl animate-float" aria-hidden="true">
            {roadmap.roleEmoji}
          </span>
        </div>

        {/* Celebration badge */}
        <div className="mb-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-pill border border-accent/30 bg-accent-light px-5 py-2 text-sm font-bold text-accent-dark">
            <PartyPopper className="h-4 w-4" aria-hidden="true" />
            Tu perfil descubierto
          </span>
        </div>

        {/* Nombre del rol */}
        <h2 className="mb-5 text-center font-display text-3xl font-extrabold text-dark sm:text-4xl">
          {roadmap.roleName}
        </h2>

        {/* Mensaje motivador */}
        <p className="mx-auto max-w-md text-center text-lg leading-relaxed text-dark-soft">
          {roadmap.motivationalMessage}
        </p>

        {/* Separador decorativo con gradiente */}
        <div className="mx-auto mt-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
          <Sparkles className="h-4 w-4 text-primary/40" aria-hidden="true" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
        </div>
      </div>
    </div>
  );
}
