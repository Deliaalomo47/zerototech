import { Briefcase, Search, Wrench } from "lucide-react";
import type { RoleCardData } from "../types";

interface RoleCardProps {
  role: RoleCardData;
}

/**
 * Tarjeta "Un día en la vida de..." — explica un rol IT de forma cercana.
 * Incluye qué hace, herramientas y tip para LinkedIn.
 * Responsive: stack vertical en mobile, visual expandida en desktop.
 */
export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="group animate-fadeInUp rounded-card border-2 border-transparent bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover sm:p-8">
      {/* Header */}
      <div className="mb-4 flex items-start gap-4">
        <span className="text-4xl" aria-hidden="true">
          {role.emoji}
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-dark sm:text-xl">
            {role.roleName}
          </h3>
          <p className="text-sm text-primary font-medium">Un día en la vida de...</p>
        </div>
      </div>

      {/* Descripción del día a día */}
      <div className="mb-5">
        <div className="flex items-start gap-2 mb-2">
          <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-soft">Día típico</span>
        </div>
        <p className="text-sm leading-relaxed text-dark-soft sm:text-base">
          {role.dailyLife}
        </p>
      </div>

      {/* Herramientas */}
      <div className="mb-5">
        <div className="flex items-start gap-2 mb-2">
          <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-secondary-dark" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-soft">Herramientas</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {role.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-pill bg-secondary/15 px-3 py-1 text-xs font-medium text-dark sm:text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* LinkedIn tip */}
      <div className="rounded-btn bg-accent/10 p-4">
        <div className="flex items-start gap-2 mb-1">
          <Search className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">Primer empleo</span>
        </div>
        <p className="text-sm text-dark-soft">{role.linkedInTip}</p>
      </div>
    </article>
  );
}
