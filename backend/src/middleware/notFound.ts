import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/HttpError.js";

export function notFound(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  next(
    HttpError.notFound(
      `Cannot ${req.method} ${req.originalUrl}`,
      "ROUTE_NOT_FOUND",
    ),
  );
}
