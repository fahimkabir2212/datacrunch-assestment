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
