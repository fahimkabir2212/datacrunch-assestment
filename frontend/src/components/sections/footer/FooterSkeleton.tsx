import Container from "../../ui/Container";

const LEGAL_COUNT = 2;
const SOCIAL_COUNT = 4;

function Bar({ className }: { className: string }) {
  return <div className={`h-4 rounded bg-ink-inverse-subtle ${className}`} />;
}

export default function FooterSkeleton() {
  return (
    <footer aria-hidden="true" className="bg-surface-emphasis pt-10">
      <Container className="animate-pulse">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Bar className="w-64" />

          <div className="flex gap-8">
            {Array.from({ length: LEGAL_COUNT }, (_, index) => (
              <Bar key={index} className="w-24" />
            ))}
          </div>

          <div className="flex gap-8">
            {Array.from({ length: SOCIAL_COUNT }, (_, index) => (
              <Bar key={index} className="w-16" />
            ))}
          </div>
        </div>

        <div className="mt-10 aspect-[155/25] w-full rounded bg-ink-inverse-subtle" />
      </Container>
    </footer>
  );
}
