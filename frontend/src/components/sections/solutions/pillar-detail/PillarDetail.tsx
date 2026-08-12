import Container from "../../../ui/Container";
import Button from "../../../ui/buttons/Button";
import PillarCard from "./PillarCard";
import PillarDetailSkeleton from "./PillarDetailSkeleton";
import SectionError from "../../../feedback/SectionError";
import { useSection } from "../../../../hooks/useSection";
import { SECTION_SLUGS } from "../../../../constants/sections";
import type { PillarDetailContent } from "../../../../types/content";

export default function PillarDetail() {
  const { status, data, error, retry } = useSection<PillarDetailContent>(
    SECTION_SLUGS.pillarDetail,
  );

  if (status === "loading") return <PillarDetailSkeleton />;

  if (status === "error") {
    return (
      <SectionError
        label="Data + AI"
        error={error}
        onRetry={retry}
        tone="light"
      />
    );
  }

  const { index, heading, description, cta, cards } = data;

  return (
    <section
      id="pillar-detail"
      className="scroll-mt-24 bg-surface-subtle pt-12 pb-20"
    >
      <Container className="split-grid">
        <span className="text-8xl font-extrabold text-ink md:text-9xl">
          {index}
        </span>
        <div>
          <h3 className="text-2xl font-bold text-ink md:text-3xl">{heading}</h3>
          <p className="mt-4 text-ink">{description}</p>
          <Button variant="emphasis" className="mt-6">
            {cta}
          </Button>
        </div>
      </Container>

      <Container className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <PillarCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </Container>
    </section>
  );
}
