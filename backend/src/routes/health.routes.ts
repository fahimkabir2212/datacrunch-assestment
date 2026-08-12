import { Router } from "express";

export const healthRoutes: Router = Router();

/** Liveness probe — also useful for warming a sleeping host before a page load. */
healthRoutes.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});
