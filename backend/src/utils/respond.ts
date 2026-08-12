import type { Response } from "express";
import type { ApiFailure, ApiSuccess } from "../types/api.js";

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
