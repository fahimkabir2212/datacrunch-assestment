import type { SectionKey, SiteSectionKey } from "../types/content";

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

export const SITE_SLUGS = {
  header: "header",
  footer: "footer",
} as const satisfies Record<SiteSectionKey, string>;

export type SiteSlug = (typeof SITE_SLUGS)[SiteSectionKey];
