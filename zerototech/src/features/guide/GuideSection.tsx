import { useState, useMemo } from "react";
import { Users, BookOpen } from "lucide-react";
import type { ITCategory } from "@/features/discovery/types";
import { rolesData, glossaryData } from "./data";
import { AreaFilter, RoleCard, GlossaryTerm } from "./components";

/**
 * Guide section — Noxora Holographic.
 * Generous whitespace, glass cards, indigo headings, Lucide section icons.
 */
export function GuideSection() {
  const [area, setArea] = useState<ITCategory | "all">("all");

  const roles = useMemo(() => {
    if (area === "all") return rolesData;
    return rolesData.filter((r) => r.category === area);
  }, [area]);

  const terms = useMemo(() => {
    if (area === "all") return glossaryData;
    return glossaryData.filter((t) => t.categories.includes(area));
  }, [area]);

  return (
    <section id="guide-section" className="mx-auto max-w-5xl px-6 py-22" aria-label="Guía de roles y glosario">
      {/* Header */}
      <div className="mb-12 animate-fade-up">
        <h2 className="font-display text-title text-indigo">
          Conocé el mundo IT
        </h2>
        <p className="mt-3 text-subtitle text-muted">
          Qué hace cada rol, qué herramientas usa y cómo hablan entre ellos.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-12 animate-fade-up-1">
        <AreaFilter selected={area} onChange={setArea} />
      </div>

      {/* Roles */}
      <div className="mb-18">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lavender-light">
            <Users className="h-4.5 w-4.5 text-indigo" aria-hidden="true" />
          </div>
          <h3 className="text-small font-semibold uppercase tracking-wider text-indigo-muted">Roles</h3>
        </div>
        {roles.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {roles.map((role) => <RoleCard key={role.id} role={role} />)}
          </div>
        ) : (
          <p className="glass-card rounded-xl p-10 text-center text-small text-muted">
            No hay roles para esta categoría.
          </p>
        )}
      </div>

      {/* Glossary */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-peach-light">
            <BookOpen className="h-4.5 w-4.5 text-indigo" aria-hidden="true" />
          </div>
          <h3 className="text-small font-semibold uppercase tracking-wider text-indigo-muted">Glosario</h3>
        </div>
        <p className="mb-6 text-small text-muted">
          Hacé clic en un término para ver su explicación.
        </p>
        {terms.length > 0 ? (
          <div className="flex flex-wrap gap-2.5">
            {terms.map((t) => <GlossaryTerm key={t.id} term={t} />)}
          </div>
        ) : (
          <p className="glass-card rounded-xl p-10 text-center text-small text-muted">
            No hay términos para esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
