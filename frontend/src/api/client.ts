import { request } from "./request";
import { ApiRequestError } from "./types";
import type { RequestOptions } from "./request";
import type { ApiResponse } from "./types";

export function get<T>(
  path: string,
  options?: RequestOptions,
): Promise<ApiResponse<T>> {
  return request<T>("GET", path, options);
}

/**
 * Turns a failure envelope into a throw.
 *
 * Use this when an error boundary should handle the failure rather than the
 * component — `use(unwrap(...))` with <Suspense> being the main case. Prefer
 * branching on `res.success` anywhere you want to render a local error state.
 */
export function unwrap<T>(response: ApiResponse<T>): T {
  if (!response.success) throw new ApiRequestError(response);
  return response.data;
}

export { ApiRequestError };
export type { ApiResponse, RequestOptions };
