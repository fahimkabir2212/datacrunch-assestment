import type { Response } from "express";
import type { ApiFailure, ApiSuccess } from "../types/api.js";

/**
 * Every response leaves through one of these two, so the envelope is built in
 * exactly one place and the HTTP status can never disagree with the `status`
 * field inside the body.
 */

export function sendSuccess<T>(res: Response, data: T, status = 200): void {
  const body: ApiSuccess<T> = { success: true, status, data, error: null };
  res.status(status).json(body);
}

export function sendFailure(
  res: Response,
  status: number,
  code: string,
  message: string,
): void {
  const body: ApiFailure = {
    success: false,
    status,
    data: null,
    error: { code, message },
  };
  res.status(status).json(body);
}
