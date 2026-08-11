import Container from "../../../ui/Container";
import { useSolutionsTab } from "../../../../context/Solutions";
import { solutionsContent } from "../../../../data/home/solutionsContent";
import PillarCard from "./PillarCard";

export default function PillarDetail() {
  const { activeTab } = useSolutionsTab();
  const tab = solutionsContent.tabs.find((t) => t.id === activeTab);

  if (!tab) return null;

  return (
    <section
      id={`solutions-panel-${tab.id}`}
      role="tabpanel"
      aria-labelledby={`solutions-tab-${tab.id}`}
      className="bg-surface-subtle pt-12 pb-20"
    >
      <Container className="split-grid">
        <span className="text-8xl font-extrabold text-ink md:text-9xl">
          {tab.index}
        </span>
        <div>
          <h3 className="text-2xl font-bold text-ink md:text-3xl">
            {tab.heading}
          </h3>
          <p className="mt-4 text-ink">{tab.description}</p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-surface-emphasis px-4 py-3 font-bold text-ink-inverse"
          >
            {tab.cta}
          </button>
        </div>
      </Container>

      <Container className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tab.cards.map((card) => (
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
