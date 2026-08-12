import { Router } from "express";
import { getSection } from "../controllers/content.controller.js";

export const contentRoutes: Router = Router();

contentRoutes.get("/home/:section", getSection);
