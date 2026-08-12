import type { SiteSectionKey } from "../types/content.js";

export enum SiteSlug {
  Header = "header",
  Footer = "footer",
}

export const SITE_KEY_BY_SLUG = {
  [SiteSlug.Header]: "header",
  [SiteSlug.Footer]: "footer",
} as const satisfies Record<SiteSlug, SiteSectionKey>;

export type SiteKeyFor<S extends SiteSlug> = (typeof SITE_KEY_BY_SLUG)[S];

export const SITE_SLUGS: readonly SiteSlug[] = Object.values(SiteSlug);

export function isSiteSlug(value: string): value is SiteSlug {
  return SITE_SLUGS.includes(value as SiteSlug);
}
