import Container from "../../ui/Container";

export default function HeaderSkeleton() {
  return (
    <header aria-hidden="true" className="relative z-50 pt-4">
      <Container>
        <div className="flex animate-pulse items-center justify-between gap-4 rounded-2xl border border-ink-inverse/10 bg-ink-inverse/10 px-4 py-3 backdrop-blur-sm md:px-6">
          <div className="h-6 w-36 rounded bg-ink-inverse-subtle" />

          <div className="hidden gap-8 md:flex">
            <div className="h-4 w-20 rounded bg-ink-inverse-subtle" />
            <div className="h-4 w-20 rounded bg-ink-inverse-subtle" />
            <div className="h-4 w-16 rounded bg-ink-inverse-subtle" />
          </div>

          <div className="h-11 w-36 rounded-xl bg-ink-inverse-subtle" />
        </div>
      </Container>
    </header>
  );
}
