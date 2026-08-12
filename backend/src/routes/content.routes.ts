import { Router } from "express";
import {
  getHomeSection,
  getSiteSection,
} from "../controllers/content.controller.js";

export const contentRoutes: Router = Router();

/** Page content. */
contentRoutes.get("/home/:section", getHomeSection);

/** Chrome shared by every route. */
contentRoutes.get("/site/:section", getSiteSection);
