import Container from "../ui/Container";
import { CLIENT_ERROR_CODES } from "../../api/types";
import type { ApiErrorBody } from "../../api/types";

interface SectionErrorProps {
  error: ApiErrorBody;
  onRetry: () => void;

  label: string;

  tone?: "light" | "dark";
}

function describe(error: ApiErrorBody): string {
  switch (error.code) {
    case CLIENT_ERROR_CODES.network:
      return "We couldn't reach the server.";
    case CLIENT_ERROR_CODES.timeout:
      return "That took too long to load.";
    case "SECTION_NOT_FOUND":
      return "This content is no longer available.";
    default:
      return "Something went wrong loading this section.";
  }
}

export default function SectionError({
  error,
  onRetry,
  label,
  tone = "dark",
}: SectionErrorProps) {
  const onDark = tone === "dark";

  return (
    <Container as="section" className="py-12">
      <div
        role="alert"
        className={`flex flex-col items-start gap-3 rounded-2xl border p-6 ${
          onDark ? "border-ink-inverse-subtle" : "border-line"
        }`}
      >
        <p className={onDark ? "text-ink-inverse" : "text-ink"}>
          <span className="font-bold">{label}</span> — {describe(error)}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="cursor-pointer rounded-lg bg-brand px-4 py-2 font-bold text-on-brand"
        >
          Try again
        </button>
      </div>
    </Container>
  );
}
