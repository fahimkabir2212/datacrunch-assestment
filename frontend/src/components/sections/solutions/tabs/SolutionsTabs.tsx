import Container from "../../../ui/Container";
import { useSolutionsTab } from "../../../../context/Solutions";
import { solutionsContent } from "../../../../data/home/solutionsContent";

export default function SolutionsTabs() {
  const { activeTab, setActiveTab } = useSolutionsTab();
  const { tabs } = solutionsContent;

  return (
    <div className="sticky top-4 z-20">
      <Container className="flex justify-center">
        <div
          role="tablist"
          aria-label="Solutions"
          className="inline-flex gap-1 rounded-xl bg-surface p-1"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`solutions-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`solutions-panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.scrollTargetId) {
                    document
                      .getElementById(tab.scrollTargetId)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap md:text-base ${
                  isActive ? "bg-surface-emphasis text-brand" : "text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
