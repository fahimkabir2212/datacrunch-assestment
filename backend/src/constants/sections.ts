import type { SectionKey } from "../types/content.js";

/**
 * The public identifier for each section, as it appears in a URL.
 *
 * Kebab-case here, camelCase in the content contract. Keeping the two
 * separate means URL style is a routing concern and does not leak into the
 * data model.
 */
export enum SectionSlug {
  Hero = "hero",
  TrustedBy = "trusted-by",
  About = "about",
  Solutions = "solutions",
  PillarDetail = "pillar-detail",
  ProductShowcase = "product-showcase",
  TechStack = "tech-stack",
}

/**
 * Slug -> content key. `satisfies Record<SectionSlug, SectionKey>` makes this
 * exhaustive in both directions: adding a slug without mapping it, or mapping
 * one to a key that is not on HomeContent, is a compile error.
 */
export const SECTION_KEY_BY_SLUG = {
  [SectionSlug.Hero]: "hero",
  [SectionSlug.TrustedBy]: "trustedBy",
  [SectionSlug.About]: "about",
  [SectionSlug.Solutions]: "solutions",
  [SectionSlug.PillarDetail]: "pillarDetail",
  [SectionSlug.ProductShowcase]: "productShowcase",
  [SectionSlug.TechStack]: "techStack",
} as const satisfies Record<SectionSlug, SectionKey>;

/** The content key a given slug resolves to. */
export type SectionKeyFor<S extends SectionSlug> =
  (typeof SECTION_KEY_BY_SLUG)[S];

/** Every slug, in page order. */
export const SECTION_SLUGS: readonly SectionSlug[] = Object.values(SectionSlug);

/** Narrows an arbitrary path segment to a known slug. */
export function isSectionSlug(value: string): value is SectionSlug {
  return SECTION_SLUGS.includes(value as SectionSlug);
}
