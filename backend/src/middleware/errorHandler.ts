import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/HttpError.js";
import { env } from "../config/env.js";
import { sendFailure } from "../utils/respond.js";

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (error instanceof HttpError) {
    sendFailure(res, error.status, error.code, error.message);
    return;
  }

  // Unexpected: log it in full, but tell the client nothing about internals.
  console.error("Unhandled error:", error);

  sendFailure(
    res,
    500,
    "INTERNAL_ERROR",
    env.isProduction
      ? "Something went wrong. Please try again."
      : error instanceof Error
        ? error.message
        : String(error),
  );
}
