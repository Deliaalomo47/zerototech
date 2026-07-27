import { Briefcase, Search, Wrench } from "lucide-react";
import type { RoleCardData } from "../types";

interface RoleCardProps {
  role: RoleCardData;
}

/**
 * Role card — Noxora Holographic.
 * Glass surface, generous padding, structured sections, premium hover.
 */
export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="glass-card rounded-2xl p-7 transition-all duration-300 ease-elegant hover:-translate-y-1 hover:shadow-hover sm:p-8">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-faint text-2xl">
          {role.emoji}
        </div>
        <div>
          <h3 className="text-body font-bold text-indigo">{role.roleName}</h3>
          <p className="text-caption font-medium text-lavender">Un día en la vida de...</p>
        </div>
      </div>

      {/* Daily life */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <Briefcase className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Día típico</span>
        </div>
        <p className="text-small text-muted leading-relaxed">{role.dailyLife}</p>
      </div>

      {/* Tools */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <Wrench className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Herramientas</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {role.tools.map((tool) => (
            <span key={tool} className="rounded-md border border-border bg-mint-light px-2.5 py-1 text-caption font-medium text-indigo">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* LinkedIn tip */}
      <div className="rounded-lg border-l-3 border-peach bg-peach-light p-4">
        <div className="mb-1 flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-peach-dark" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-peach-dark">Primer empleo</span>
        </div>
        <p className="text-small text-muted">{role.linkedInTip}</p>
      </div>
    </article>
  );
}
