import { useState } from "react";
import Container from "../../../ui/Container";
import { solutionsContent } from "../../../../data/home/solutionsContent";

/**
 * Pure in-page navigation — each link jumps to a section (via a plain
 * anchor href; html { scroll-behavior: smooth } in global.css handles
 * the smooth scroll natively, no JS needed for that part). The
 * highlight just reflects which link was last clicked, not which
 * section's content is showing — nothing here changes on click.
 */
export default function SolutionsTabs() {
  const { tabs } = solutionsContent;
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <nav aria-label="Solutions sections" className="sticky top-4 z-20">
      <Container className="flex justify-center">
        <div className="inline-flex gap-1 rounded-xl bg-surface p-1">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <a
                key={tab.id}
                href={`#${tab.scrollTargetId}`}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap md:text-base ${
                  isActive ? "bg-surface-emphasis text-brand" : "text-ink"
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
