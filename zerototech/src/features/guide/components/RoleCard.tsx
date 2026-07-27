import type { RoleCardData } from "../types";

interface RoleCardProps {
  role: RoleCardData;
}

/**
 * Role card — v3.
 *
 * Notion-inspired: clean surface, structured content sections,
 * no heavy decorations. Information density over visual noise.
 */
export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-surface p-6 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">{role.emoji}</span>
        <div>
          <h3 className="text-body-sm font-semibold text-neutral-900">
            {role.roleName}
          </h3>
          <p className="text-caption text-primary">Un día en la vida de...</p>
        </div>
      </div>

      {/* Daily life */}
      <p className="mb-4 text-body-sm leading-relaxed text-neutral-500">
        {role.dailyLife}
      </p>

      {/* Tools */}
      <div className="mb-4">
        <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-neutral-400">
          Herramientas
        </p>
        <div className="flex flex-wrap gap-1.5">
          {role.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-caption font-medium text-neutral-600"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* LinkedIn tip */}
      <div className="border-t border-neutral-100 pt-4">
        <p className="text-caption text-neutral-400">
          <span className="font-semibold text-neutral-500">LinkedIn:</span>{" "}
          {role.linkedInTip}
        </p>
      </div>
    </article>
  );
}
