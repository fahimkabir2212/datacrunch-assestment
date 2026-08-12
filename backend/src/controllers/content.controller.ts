import type { Request, Response } from "express";
import { contentService } from "../services/content.service.js";
import { HttpError } from "../errors/HttpError.js";
import { SECTION_SLUGS, isSectionSlug } from "../constants/sections.js";
import { env } from "../config/env.js";
import { sendSuccess } from "../utils/respond.js";

function cacheControl(): string {
  return env.isProduction
    ? "public, max-age=300, stale-while-revalidate=60"
    : "no-store";
}

export async function getSection(req: Request, res: Response): Promise<void> {
  const slug = typeof req.params.section === "string" ? req.params.section : "";

  if (!isSectionSlug(slug)) {
    throw HttpError.notFound(
      `Unknown section '${slug}'. Known sections: ${SECTION_SLUGS.join(", ")}.`,
      "SECTION_NOT_FOUND",
    );
  }

  const section = await contentService.getSection(slug);
  res.set("Cache-Control", cacheControl());
  sendSuccess(res, section);
}
