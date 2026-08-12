export interface ApiErrorBody {
  code: string;
  message: string;
}

export interface ApiSuccess<T> {
  success: true;
  status: number;
  data: T;
  error: null;
}

export interface ApiFailure {
  success: false;
  status: number;
  data: null;
  error: ApiErrorBody;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export const CLIENT_ERROR_CODES = {
  network: "NETWORK_ERROR",
  timeout: "TIMEOUT",
  malformed: "MALFORMED_RESPONSE",
} as const;

export class ApiRequestError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(failure: ApiFailure) {
    super(failure.error.message);
    this.name = "ApiRequestError";
    this.status = failure.status;
    this.code = failure.error.code;
  }

  /** True when the request never reached the server — a retry may well fix it. */
  get isNetworkError(): boolean {
    return this.status === 0;
  }
}
