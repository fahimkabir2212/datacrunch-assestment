import { Router } from "express";
import { sendSuccess } from "../utils/respond.js";

export const healthRoutes: Router = Router();

/** Liveness probe — also useful for warming a sleeping host before a page load. */
healthRoutes.get("/health", (_req, res) => {
  sendSuccess(res, { status: "ok", uptime: process.uptime() });
});
