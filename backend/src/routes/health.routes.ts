import { Router } from "express";
import { sendSuccess } from "../utils/respond.js";

export const healthRoutes: Router = Router();

healthRoutes.get("/health", (_req, res) => {
  sendSuccess(res, { status: "ok", uptime: process.uptime() });
});
