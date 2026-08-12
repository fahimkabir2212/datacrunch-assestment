import Container from "../../ui/Container";

export default function AboutSkeleton() {
  return (
    <section className="mt-10 bg-white" aria-hidden="true">
      <Container className="split-grid animate-pulse py-10">
        <div className="h-5 w-24 rounded bg-line" />

        <div className="mt-2 space-y-2 md:max-w-lg">
          <div className="h-6 w-full rounded bg-line" />
          <div className="h-6 w-full rounded bg-line" />
          <div className="h-6 w-2/3 rounded bg-line" />
        </div>
      </Container>
    </section>
  );
}
