import type { Request, Response } from "express";
import { contentService } from "../services/content.service.js";
import { HttpError } from "../errors/HttpError.js";
import { SECTION_SLUGS, isSectionSlug } from "../constants/sections.js";
import { SITE_SLUGS, isSiteSlug } from "../constants/site.js";
import { env } from "../config/env.js";
import { sendSuccess } from "../utils/respond.js";

function cacheControl(): string {
  return env.isProduction
    ? "public, max-age=300, stale-while-revalidate=60"
    : "no-store";
}

function slugParam(req: Request): string {
  return typeof req.params.section === "string" ? req.params.section : "";
}

function unknownSection(slug: string, known: readonly string[]): HttpError {
  return HttpError.notFound(
    `Unknown section '${slug}'. Known sections: ${known.join(", ")}.`,
    "SECTION_NOT_FOUND",
  );
}

export async function getHomeSection(
  req: Request,
  res: Response,
): Promise<void> {
  const slug = slugParam(req);

  if (!isSectionSlug(slug)) throw unknownSection(slug, SECTION_SLUGS);

  const section = await contentService.getHomeSection(slug);
  res.set("Cache-Control", cacheControl());
  sendSuccess(res, section);
}

export async function getSiteSection(
  req: Request,
  res: Response,
): Promise<void> {
  const slug = slugParam(req);

  if (!isSiteSlug(slug)) throw unknownSection(slug, SITE_SLUGS);

  const section = await contentService.getSiteSection(slug);
  res.set("Cache-Control", cacheControl());
  sendSuccess(res, section);
}
