import { Briefcase, Search, Wrench } from "lucide-react";
import type { RoleCardData } from "../types";

interface RoleCardProps {
  role: RoleCardData;
}

/**
 * Role card — Noxora final.
 * Generous padding, clean structure, no emojis in chrome.
 * Role emoji kept only as visual identifier for the role itself.
 */
export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-7 transition-all duration-300 ease-elegant hover:shadow-hover hover:-translate-y-0.5 sm:p-8">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-faint text-xl">
          {role.emoji}
        </div>
        <div>
          <h3 className="text-body font-bold text-indigo">{role.roleName}</h3>
          <p className="text-caption text-blue">Un día en la vida de...</p>
        </div>
      </div>

      {/* Daily life */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <Briefcase className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-muted">Día típico</span>
        </div>
        <p className="text-small text-indigo-muted leading-relaxed">{role.dailyLife}</p>
      </div>

      {/* Tools */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <Wrench className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-muted">Herramientas</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {role.tools.map((tool) => (
            <span key={tool} className="rounded-md bg-mint-light px-2.5 py-1 text-caption font-medium text-indigo">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* LinkedIn */}
      <div className="border-t border-border pt-4">
        <div className="mb-1.5 flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-muted">Primer empleo</span>
        </div>
        <p className="text-small text-indigo-muted">{role.linkedInTip}</p>
      </div>
    </article>
  );
}
