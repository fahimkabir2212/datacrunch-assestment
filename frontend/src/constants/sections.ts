import type { SectionKey } from "../types/content";

export const SECTION_SLUGS = {
  hero: "hero",
  trustedBy: "trusted-by",
  about: "about",
  solutions: "solutions",
  pillarDetail: "pillar-detail",
  productShowcase: "product-showcase",
  techStack: "tech-stack",
} as const satisfies Record<SectionKey, string>;

export type SectionSlug = (typeof SECTION_SLUGS)[SectionKey];
