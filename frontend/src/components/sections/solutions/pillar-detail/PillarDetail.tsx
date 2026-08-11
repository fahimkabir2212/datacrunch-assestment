import Container from "../../../ui/Container";
import { pillarDetailContent } from "../../../../data/home/pillarDetailContent";
import PillarCard from "./PillarCard";

export default function PillarDetail() {
  const { index, heading, description, cta, cards } = pillarDetailContent;

  return (
    <section id="pillar-detail" className="scroll-mt-24 bg-surface-subtle pt-12 pb-20">
      <Container className="split-grid">
        <span className="text-8xl font-extrabold text-ink md:text-9xl">
          {index}
        </span>
        <div>
          <h3 className="text-2xl font-bold text-ink md:text-3xl">
            {heading}
          </h3>
          <p className="mt-4 text-ink">{description}</p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-surface-emphasis px-4 py-3 font-bold text-ink-inverse"
          >
            {cta}
          </button>
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
