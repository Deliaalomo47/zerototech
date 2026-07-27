import { Briefcase, Search, Wrench } from "lucide-react";
import type { RoleCardData } from "../types";

interface RoleCardProps {
  role: RoleCardData;
}

/**
 * Tarjeta "Un día en la vida de..." — rediseño v2.
 *
 * - Layout más limpio con secciones bien definidas
 * - Emoji más grande con fondo canvas
 * - Herramientas como pills con gradiente sutil
 * - LinkedIn tip con borde acentuado a la izquierda
 * - Transición más suave y elevación orgánica
 */
export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="group animate-fadeInUp rounded-card-lg border border-white/60 bg-surface p-6 shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
      {/* Header */}
      <div className="mb-5 flex items-start gap-4">
        {/* Emoji con fondo */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-canvas-deep text-3xl">
          <span aria-hidden="true">{role.emoji}</span>
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="font-display text-lg font-bold text-dark sm:text-xl">
            {role.roleName}
          </h3>
          <p className="text-sm font-medium text-primary">Un día en la vida de...</p>
        </div>
      </div>

      {/* Día típico */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider text-dark-muted">Día típico</span>
        </div>
        <p className="text-sm leading-relaxed text-dark-soft sm:text-[0.94rem]">
          {role.dailyLife}
        </p>
      </div>

      {/* Herramientas */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <Wrench className="h-4 w-4 text-teal" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider text-dark-muted">Herramientas</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {role.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-pill border border-teal/15 bg-teal-light px-3 py-1 text-xs font-semibold text-dark sm:text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* LinkedIn tip — con borde lateral accent */}
      <div className="rounded-xl border-l-4 border-accent bg-accent-light/60 py-3.5 pl-4 pr-4">
        <div className="mb-1 flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-dark">Primer empleo</span>
        </div>
        <p className="text-sm text-dark-soft">{role.linkedInTip}</p>
      </div>
    </article>
  );
}
