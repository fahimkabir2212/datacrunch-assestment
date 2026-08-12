import { useCallback, useEffect, useState } from "react";
import { get } from "../api/client";
import type { ApiErrorBody } from "../api/types";
import type { SectionSlug } from "../constants/sections";

export type SectionState<T> =
  | { status: "loading"; data: null; error: null }
  | { status: "error"; data: null; error: ApiErrorBody }
  | { status: "success"; data: T; error: null };

export type UseSectionResult<T> = SectionState<T> & { retry: () => void };

const LOADING = { status: "loading", data: null, error: null } as const;

export function useSection<T>(slug: SectionSlug): UseSectionResult<T> {
  const [state, setState] = useState<SectionState<T>>(LOADING);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    void (async () => {
      try {
        const response = await get<T>(`/home/${slug}`, {
          signal: controller.signal,
        });

        if (!active) return;

        setState(
          response.success
            ? { status: "success", data: response.data, error: null }
            : { status: "error", data: null, error: response.error },
        );
      } catch (cause) {
        if (!active || controller.signal.aborted) return;

        setState({
          status: "error",
          data: null,
          error: {
            code: "UNEXPECTED",
            message:
              cause instanceof Error
                ? cause.message
                : "Something went wrong loading this section.",
          },
        });
      }
    })();

    return () => {
      active = false;
      controller.abort();
    };
  }, [slug, attempt]);

  const retry = useCallback(() => {
    setState(LOADING);
    setAttempt((n) => n + 1);
  }, []);

  return { ...state, retry };
}
