import { useCallback, useEffect, useState } from "react";
import { get } from "../api/client";
import type { ApiErrorBody } from "../api/types";
import type { SectionSlug, SiteSlug } from "../constants/sections";

export type SectionState<T> =
  | { status: "loading"; data: null; error: null }
  | { status: "error"; data: null; error: ApiErrorBody }
  | { status: "success"; data: T; error: null };

export type UseSectionResult<T> = SectionState<T> & { retry: () => void };

const LOADING = { status: "loading", data: null, error: null } as const;

function useResource<T>(path: string): UseSectionResult<T> {
  const [state, setState] = useState<SectionState<T>>(LOADING);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    void (async () => {
      try {
        const response = await get<T>(path, {
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
  }, [path, attempt]);

  const retry = useCallback(() => {
    setState(LOADING);
    setAttempt((n) => n + 1);
  }, []);

  return { ...state, retry };
}

/** A section of the home page. */
export function useSection<T>(slug: SectionSlug): UseSectionResult<T> {
  return useResource<T>(`/home/${slug}`);
}

/** A piece of chrome shared by every route. */
export function useSiteSection<T>(slug: SiteSlug): UseSectionResult<T> {
  return useResource<T>(`/site/${slug}`);
}
