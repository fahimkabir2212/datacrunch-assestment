import { useState } from "react";
import Container from "../../../ui/Container";
import SolutionsTabsSkeleton from "./SolutionsTabsSkeleton";
import SectionError from "../../../feedback/SectionError";
import { useSection } from "../../../../hooks/useSection";
import { SECTION_SLUGS } from "../../../../constants/sections";
import type { SolutionsContent } from "../../../../types/content";

export default function SolutionsTabs() {
  const { status, data, error, retry } = useSection<SolutionsContent>(
    SECTION_SLUGS.solutions,
  );

  const [activeTab, setActiveTab] = useState<string | null>(null);

  if (status === "loading") return <SolutionsTabsSkeleton />;

  if (status === "error") {
    return (
      <SectionError
        label="Solutions"
        error={error}
        onRetry={retry}
        tone="light"
      />
    );
  }

  const { tabs } = data;
  const activeId = activeTab ?? tabs[0]?.id;

  return (
    <nav aria-label="Solutions sections" className="sticky top-4 z-20">
      <Container className="flex justify-center">
        <div className="inline-flex gap-1 rounded-xl bg-surface p-1">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;

            return (
              <a
                key={tab.id}
                href={`#${tab.scrollTargetId}`}
                onClick={() => setActiveTab(tab.id)}
                aria-current={isActive ? "true" : undefined}
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
