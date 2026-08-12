import { Router } from "express";
import { getSection } from "../controllers/content.controller.js";

export const contentRoutes: Router = Router();

/**
 * One endpoint per section, e.g. /api/home/hero, /api/home/trusted-by.
 *
 * A single parameterised route rather than seven literal ones: the valid slugs
 * live in the SectionSlug enum, so the set is defined once and validated in the
 * controller instead of being restated here.
 */
contentRoutes.get("/home/:section", getSection);
