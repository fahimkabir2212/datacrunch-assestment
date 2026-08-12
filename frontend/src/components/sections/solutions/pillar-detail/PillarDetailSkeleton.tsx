import Container from "../../../ui/Container";

const CARD_COUNT = 3;

export default function PillarDetailSkeleton() {
  return (
    <section
      className="scroll-mt-24 bg-surface-subtle pt-12 pb-20"
      aria-hidden="true"
    >
      <Container className="split-grid animate-pulse">
        <div className="h-24 w-28 rounded-lg bg-line md:h-32 md:w-36" />

        <div>
          <div className="h-8 w-2/3 rounded bg-line md:h-9" />
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-line" />
            <div className="h-4 w-full rounded bg-line" />
            <div className="h-4 w-4/5 rounded bg-line" />
          </div>
          <div className="mt-6 h-12 w-48 rounded-lg bg-line" />
        </div>
      </Container>

      <Container className="mt-10 grid animate-pulse grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: CARD_COUNT }, (_, index) => (
          <div
            key={index}
            className="flex aspect-square items-center justify-center rounded-2xl bg-surface p-8"
          >
            {/* Card titles sit centred until hover, so the bar does too. */}
            <div className="h-6 w-3/4 rounded bg-line" />
          </div>
        ))}
      </Container>
    </section>
  );
}
