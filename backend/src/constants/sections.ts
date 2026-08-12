import type { SectionKey } from "../types/content.js";

export enum SectionSlug {
  Hero = "hero",
  TrustedBy = "trusted-by",
  About = "about",
  Solutions = "solutions",
  PillarDetail = "pillar-detail",
  ProductShowcase = "product-showcase",
  TechStack = "tech-stack",
}

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
