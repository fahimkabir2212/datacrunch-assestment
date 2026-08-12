import Container from "../../../ui/Container";

const ROW_COUNT = 3;
const CELLS_PER_ROW = 8;

export default function TechStackSkeleton() {
  return (
    <section className="scroll-mt-24 bg-surface" aria-hidden="true">
      <Container className="split-grid animate-pulse py-16">
        <div className="h-5 w-28 rounded bg-line" />

        <div>
          <div className="h-8 w-2/3 rounded bg-line md:h-9" />
          <div className="mt-3 space-y-2">
            <div className="h-4 w-full rounded bg-line" />
            <div className="h-4 w-4/5 rounded bg-line" />
          </div>
        </div>
      </Container>

      <div className="mt-10 flex animate-pulse flex-col gap-4 pb-16">
        {Array.from({ length: ROW_COUNT }, (_, row) => (
          <div key={row} className="overflow-hidden">
            <div className="flex w-max gap-4">
              {Array.from({ length: CELLS_PER_ROW }, (_, cell) => (
                <div
                  key={cell}
                  className="h-18 w-40 shrink-0 rounded-xl border border-ink-subtle/30 bg-ink-subtle/20 md:h-24 md:w-52"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
