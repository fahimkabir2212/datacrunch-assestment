import Container from "../../../ui/Container";

export default function ProductShowcaseSkeleton() {
  return (
    <section className="scroll-mt-24 bg-surface-brand" aria-hidden="true">
      <Container className="grid animate-pulse grid-cols-1 gap-8 py-16 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-between gap-16">
          <div className="h-10 w-48 rounded bg-ink-inverse-subtle md:w-56" />

          <div>
            <div className="max-w-lg space-y-3">
              <div className="h-9 w-full rounded bg-ink-inverse-subtle md:h-12" />
              <div className="h-9 w-3/4 rounded bg-ink-inverse-subtle md:h-12" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-4 w-full rounded bg-ink-inverse-subtle" />
              <div className="h-4 w-5/6 rounded bg-ink-inverse-subtle" />
            </div>
            <div className="mt-6 h-11 w-40 rounded-full bg-ink-inverse-subtle" />
          </div>
        </div>

        <div className="aspect-square w-full rounded-2xl bg-ink-inverse-subtle" />
      </Container>
    </section>
  );
}
