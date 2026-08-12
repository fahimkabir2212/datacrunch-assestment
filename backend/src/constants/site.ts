import type { SiteSectionKey } from "../types/content.js";

export enum SiteSlug {
  Footer = "footer",
}

export const SITE_KEY_BY_SLUG = {
  [SiteSlug.Footer]: "footer",
} as const satisfies Record<SiteSlug, SiteSectionKey>;

/** The content key a given slug resolves to. */
export type SiteKeyFor<S extends SiteSlug> = (typeof SITE_KEY_BY_SLUG)[S];

export const SITE_SLUGS: readonly SiteSlug[] = Object.values(SiteSlug);

/** Narrows an arbitrary path segment to a known slug. */
export function isSiteSlug(value: string): value is SiteSlug {
  return SITE_SLUGS.includes(value as SiteSlug);
}
