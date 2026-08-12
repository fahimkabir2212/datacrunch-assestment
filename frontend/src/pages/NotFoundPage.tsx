import Container from "../components/ui/Container";
import Button from "../components/ui/buttons/Button";

export default function NotFoundPage() {
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

        <p
          aria-hidden="true"
          className="font-display text-8xl leading-none font-extrabold text-brand md:text-9xl"
        >
          404
        </p>

        <h1 className="text-4xl leading-[1.1] font-extrabold text-ink-inverse md:text-5xl">
          This page took a wrong turn
        </h1>

        <p className="max-w-lg text-sm font-light text-ink-inverse/80 md:text-base">
          The page you are looking for does not exist, or it has moved.
          Everything else is still where you left it.
        </p>

        <Button as="link" to="/" className="mt-1">
          Back to home
        </Button>
      </Container>
    </main>
  );
}
