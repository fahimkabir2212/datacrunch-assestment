import { isRouteErrorResponse, useRouteError } from "react-router";
import Container from "../components/ui/Container";
import Button from "../components/ui/buttons/Button";

function statusOf(error: unknown): number | null {
  return isRouteErrorResponse(error) ? error.status : null;
}

function detailOf(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  }
  if (error instanceof Error) {
    return error.stack ?? error.message;
  }
  return String(error);
}

export default function RouteErrorPage() {
  const error = useRouteError();
  const status = statusOf(error);

  console.error("Route error:", error);

  return (
    <main id="main" className="bg-canvas">
      <Container
        as="section"
        className="flex min-h-screen flex-col items-start justify-center gap-5 py-24"
      >
        <p className="flex items-center gap-1 text-lg font-semibold text-brand md:text-base">
          <span>Error</span>
          <span aria-hidden="true">/&gt;</span>
        </p>

        {status !== null && (
          <p
            aria-hidden="true"
            className="font-display text-8xl leading-none font-extrabold text-brand md:text-9xl"
          >
            {status}
          </p>
        )}

        <h1 className="text-4xl leading-[1.1] font-extrabold text-ink-inverse md:text-5xl">
          Something went wrong
        </h1>

        <p className="max-w-lg text-sm font-light text-ink-inverse/80 md:text-base">
          An unexpected error stopped this page from loading. Reloading usually
          clears it — if it keeps happening, come back in a few minutes.
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          <Button onClick={() => window.location.reload()}>Reload page</Button>

          <Button as="link" to="/" variant="outline">
            Back to home
          </Button>
        </div>

        {import.meta.env.DEV && (
          <pre className="mt-6 max-w-full overflow-x-auto rounded-lg border border-ink-inverse-subtle p-4 text-xs text-ink-inverse/70">
            {detailOf(error)}
          </pre>
        )}
      </Container>
    </main>
  );
}
