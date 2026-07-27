import { Sparkles } from "lucide-react";
import type { RoadmapData } from "../types";

interface ProfileCardProps {
  roadmap: RoadmapData;
}

/**
 * Tarjeta de bienvenida que muestra el rol IT recomendado al usuario
 * con un mensaje motivador personalizado por categoría.
 */
export function ProfileCard({ roadmap }: ProfileCardProps) {
  return (
    <div className="animate-fadeInUp rounded-card bg-surface p-8 shadow-card sm:p-10">
      {/* Emoji del rol */}
      <div className="mb-4 flex justify-center">
        <span className="text-6xl" aria-hidden="true">
          {roadmap.roleEmoji}
        </span>
      </div>

      {/* Badge */}
      <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent-dark">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Tu perfil descubierto
        </span>
      </div>

      {/* Nombre del rol */}
      <h2 className="mb-4 text-center font-display text-3xl font-extrabold text-dark sm:text-4xl">
        {roadmap.roleName}
      </h2>

      {/* Mensaje motivador */}
      <p className="mx-auto max-w-lg text-center text-lg leading-relaxed text-dark-soft">
        {roadmap.motivationalMessage}
      </p>

      {/* Separador decorativo */}
      <div className="mx-auto mt-6 h-1 w-20 rounded-pill bg-gradient-to-r from-primary to-secondary" />
    </div>
  );
}
