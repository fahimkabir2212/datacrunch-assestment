import { CLIENT_ERROR_CODES } from "./types";
import type { ApiFailure, ApiResponse } from "./types";

/**
 * Origin only — VITE_API_BASE_URL is e.g. http://localhost:5000. Leave it unset
 * to call the same origin, which is what you want behind a dev proxy or when
 * the API is deployed alongside the app.
 */
const BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

const API_PREFIX = "/api";

const DEFAULT_TIMEOUT_MS = 10_000;

export interface RequestOptions {
  signal?: AbortSignal;
  /** Overrides the default request timeout. */
  timeoutMs?: number;
  headers?: HeadersInit;
  cache?: RequestCache;
}

function failure(status: number, code: string, message: string): ApiFailure {
  return { success: false, status, data: null, error: { code, message } };
}

async function parse<T>(
  response: Response,
  path: string,
): Promise<ApiResponse<T>> {
  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");

  if (!isJson) {
    return failure(
      response.status,
      CLIENT_ERROR_CODES.malformed,
      `Expected JSON from ${path} but received ${response.headers.get("content-type") ?? "no content type"}.`,
    );
  }

  let body: unknown;
  try {
    body = await response.json();
  } catch {
    return failure(
      response.status,
      CLIENT_ERROR_CODES.malformed,
      `Malformed JSON in response from ${path}.`,
    );
  }

  if (
    typeof body === "object" &&
    body !== null &&
    "success" in body &&
    typeof (body as { success: unknown }).success === "boolean"
  ) {
    return body as ApiResponse<T>;
  }

  return failure(
    response.status,
    CLIENT_ERROR_CODES.malformed,
    `Unexpected response shape from ${path}.`,
  );
}

/**
 The request function is the core of the API client. 
 It handles timeouts, network errors, and response parsing.
 */
export async function request<T>(
  method: "GET",
  path: string,
  {
    signal,
    timeoutMs = DEFAULT_TIMEOUT_MS,
    headers,
    cache,
  }: RequestOptions = {},
): Promise<ApiResponse<T>> {
  const timeout = AbortSignal.timeout(timeoutMs);
  const combined = signal ? AbortSignal.any([signal, timeout]) : timeout;
  const url = `${BASE_URL}${API_PREFIX}${path}`;

  let response: Response;
  try {
    response = await fetch(url, {
      method,
      headers: { Accept: "application/json", ...headers },
      signal: combined,
      ...(cache ? { cache } : {}),
    });
  } catch (cause) {
    if (signal?.aborted) throw cause;

    if (timeout.aborted) {
      return failure(
        0,
        CLIENT_ERROR_CODES.timeout,
        `Request to ${path} timed out after ${timeoutMs}ms.`,
      );
    }

    return failure(
      0,
      CLIENT_ERROR_CODES.network,
      "Could not reach the server. Check your connection and try again.",
    );
  }

  return parse<T>(response, path);
}
