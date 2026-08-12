import { Router } from "express";
import { healthRoutes } from "./health.routes.js";
import { contentRoutes } from "./content.routes.js";

/** Everything under /api. Mounted by app.ts. */
export const apiRoutes: Router = Router();

apiRoutes.use(healthRoutes);
apiRoutes.use(contentRoutes);
