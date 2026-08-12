import { homeContent } from "../data/home.js";
import { siteContent } from "../data/site.js";
import {
  SECTION_KEY_BY_SLUG,
  type SectionKeyFor,
  type SectionSlug,
} from "../constants/sections.js";
import {
  SITE_KEY_BY_SLUG,
  type SiteKeyFor,
  type SiteSlug,
} from "../constants/site.js";
import type { HomeContent, SiteContent } from "../types/content.js";

export interface ContentService {
  getHomeSection<S extends SectionSlug>(
    slug: S,
  ): Promise<HomeContent[SectionKeyFor<S>]>;

  getSiteSection<S extends SiteSlug>(
    slug: S,
  ): Promise<SiteContent[SiteKeyFor<S>]>;
}

export const contentService: ContentService = {
  async getHomeSection<S extends SectionSlug>(slug: S) {
    const key = SECTION_KEY_BY_SLUG[slug];
    return homeContent[key] as HomeContent[SectionKeyFor<S>];
  },

  async getSiteSection<S extends SiteSlug>(slug: S) {
    const key = SITE_KEY_BY_SLUG[slug];
    return siteContent[key] as SiteContent[SiteKeyFor<S>];
  },
};
