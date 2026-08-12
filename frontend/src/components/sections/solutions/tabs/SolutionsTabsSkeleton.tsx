import Container from "../../../ui/Container";

const TAB_COUNT = 3;

export default function SolutionsTabsSkeleton() {
  return (
    <nav className="sticky top-4 z-20" aria-hidden="true">
      <Container className="flex justify-center">
        <div className="inline-flex animate-pulse gap-1 rounded-xl bg-surface p-1">
          {Array.from({ length: TAB_COUNT }, (_, index) => (
            <div key={index} className="h-9 w-28 rounded-lg bg-line md:h-10" />
          ))}
        </div>
      </Container>
    </nav>
  );
}
