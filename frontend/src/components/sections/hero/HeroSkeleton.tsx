import Container from "../../ui/Container";

export default function HeroSkeleton() {
  return (
    <Container as="section" className="mt-20" aria-hidden="true">
      <div className="flex animate-pulse flex-col items-start gap-5">
        <div className="flex w-full flex-col items-start gap-7.5 lg:flex-row lg:items-center">
          <div className="w-full space-y-3 lg:w-1/2">
            <div className="h-12 w-full rounded-lg bg-ink-inverse-subtle md:h-14" />
            <div className="h-12 w-4/5 rounded-lg bg-ink-inverse-subtle md:h-14" />
            <div className="h-12 w-3/5 rounded-lg bg-ink-inverse-subtle md:h-14" />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-ink-inverse-subtle" />
              <div className="h-4 w-full rounded bg-ink-inverse-subtle" />
              <div className="h-4 w-2/3 rounded bg-ink-inverse-subtle" />
            </div>
            <div className="mt-6 h-11 w-40 rounded-lg bg-ink-inverse-subtle" />
          </div>
        </div>

        <div className="mt-8 w-full md:mt-20">
          <div className="aspect-video w-full rounded-2xl bg-ink-inverse-subtle md:aspect-1400/571" />
        </div>
      </div>
    </Container>
  );
}
