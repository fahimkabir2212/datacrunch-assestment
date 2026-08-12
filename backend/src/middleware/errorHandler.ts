import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/HttpError.js";
import { env } from "../config/env.js";

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (error instanceof HttpError) {
    res.status(error.status).json({
      error: { code: error.code, message: error.message },
    });
    return;
  }

  // Unexpected: log it in full, but tell the client nothing about internals.
  console.error("Unhandled error:", error);

  res.status(500).json({
    error: {
      code: "INTERNAL_ERROR",
      message: env.isProduction
        ? "Something went wrong. Please try again."
        : error instanceof Error
          ? error.message
          : String(error),
    },
  });
}
