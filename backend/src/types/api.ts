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

/**
 * Discriminated on `success`, so a client that checks it narrows `data` to
 * non-null and `error` to present in the same step.
 */
export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
