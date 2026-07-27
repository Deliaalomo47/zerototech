import type { ITCategory } from "@/features/discovery/types";

/**
 * Tarjeta de rol: "Un día en la vida de..."
 */
export interface RoleCardData {
  id: string;
  category: ITCategory;
  roleName: string;
  emoji: string;
  /** Qué hace esta persona en un día típico */
  dailyLife: string;
  /** Herramientas que usa */
  tools: string[];
  /** Qué buscar en LinkedIn para el primer empleo */
  linkedInTip: string;
}

/**
 * Término del glosario / traductor de jerga.
 */
export interface GlossaryTermData {
  id: string;
  term: string;
  /** Definición simple, "explicada con manzanas" */
  definition: string;
  /** Categorías relacionadas (para filtrar) */
  categories: ITCategory[];
}
