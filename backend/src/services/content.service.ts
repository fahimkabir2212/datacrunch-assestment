import { homeContent } from "../data/home.js";
import {
  SECTION_KEY_BY_SLUG,
  type SectionKeyFor,
  type SectionSlug,
} from "../constants/sections.js";
import type { HomeContent } from "../types/content.js";

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
