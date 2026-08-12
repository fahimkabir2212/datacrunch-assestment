import { homeContent } from "../data/home.js";
import {
  SECTION_KEY_BY_SLUG,
  type SectionKeyFor,
  type SectionSlug,
} from "../constants/sections.js";
import type { HomeContent } from "../types/content.js";

/**
 * The seam between HTTP and storage. Controllers depend on this interface and
 * never on the data module, so swapping the static object for a database or CMS
 * changes this file only.
 *
 * `getSection` is async even though the current source is synchronous. That is
 * deliberate: when it becomes a query, no signature and no caller has to
 * change.
 */
export interface ContentService {
  getSection<S extends SectionSlug>(
    slug: S,
  ): Promise<HomeContent[SectionKeyFor<S>]>;
}

export const contentService: ContentService = {
  async getSection<S extends SectionSlug>(slug: S) {
    const key = SECTION_KEY_BY_SLUG[slug];
    return homeContent[key] as HomeContent[SectionKeyFor<S>];
  },
};
