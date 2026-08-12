import Container from "../../ui/Container";

const CELL_COUNT = 8;

export default function TrustedBySkeleton() {
  return (
    <Container as="section" className="mt-20" aria-hidden="true">
      <div className="split-grid animate-pulse">
        <div className="space-y-2 lg:max-w-2/3">
          <div className="h-6 w-full rounded bg-ink-inverse-subtle" />
          <div className="h-6 w-3/4 rounded bg-ink-inverse-subtle" />
        </div>

        <div className="grid grid-cols-2 border-t border-l border-ink-inverse-subtle sm:grid-cols-4">
          {Array.from({ length: CELL_COUNT }, (_, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-r border-b border-ink-inverse-subtle px-6 py-8"
            >
              <div className="h-10 w-24 rounded bg-ink-inverse-subtle md:h-7" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
