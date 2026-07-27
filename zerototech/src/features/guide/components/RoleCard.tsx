import { Target, Code2, Brain, TrendingUp, Building2, BookOpen } from "lucide-react";
import type { RoleCardData } from "../types";

interface RoleCardProps {
  role: RoleCardData;
}

/**
 * Role card — Noxora Holographic.
 * Structured, useful, atemporal information.
 * No "Un día en la vida de..." — replaced with actionable data.
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
          <p className="text-caption text-lavender font-medium">{role.entryLevel.split(".")[0]}</p>
        </div>
      </div>

      {/* What they do */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <Target className="h-3.5 w-3.5 text-mint" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Qué hace</span>
        </div>
        <p className="text-small text-muted leading-relaxed">{role.whatTheyDo}</p>
      </div>

      {/* Problems solved */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <Brain className="h-3.5 w-3.5 text-lavender" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Problemas que resuelve</span>
        </div>
        <p className="text-small text-muted leading-relaxed">{role.problemsSolved}</p>
      </div>

      {/* Technologies */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <Code2 className="h-3.5 w-3.5 text-lavender" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Tecnologías</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {role.technologies.map((t) => (
            <span key={t} className="rounded-md border border-border bg-lavender-light px-2.5 py-1 text-caption font-medium text-indigo">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <TrendingUp className="h-3.5 w-3.5 text-peach" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Habilidades</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {role.skills.map((s) => (
            <span key={s} className="rounded-md border border-border bg-mint-light px-2.5 py-1 text-caption font-medium text-indigo">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* How to learn */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-mint" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Cómo aprender</span>
        </div>
        <p className="text-small text-muted leading-relaxed">{role.howToLearn}</p>
      </div>

      {/* Companies */}
      <div className="rounded-lg border-l-3 border-lavender bg-lavender-light p-4">
        <div className="mb-1.5 flex items-center gap-2">
          <Building2 className="h-3.5 w-3.5 text-indigo" aria-hidden="true" />
          <span className="text-caption font-semibold uppercase tracking-wider text-indigo-muted">Empresas que contratan</span>
        </div>
        <p className="text-small text-indigo">{role.companies.join(" · ")}</p>
      </div>
    </article>
  );
}
