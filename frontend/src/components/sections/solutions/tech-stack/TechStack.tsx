import Container from "../../../ui/Container";
import Eyebrow from "../../../ui/Eyebrow";
import TechStackRow from "./TechStackRow";
import TechStackSkeleton from "./TechStackSkeleton";
import SectionError from "../../../feedback/SectionError";
import { useSection } from "../../../../hooks/useSection";
import { SECTION_SLUGS } from "../../../../constants/sections";
import type {
  TechStackContent,
  TechStackItem,
} from "../../../../types/content";

const ROW_SIZE = 6;

function toRows(items: TechStackItem[]): TechStackItem[][] {
  const rows: TechStackItem[][] = [];
  for (let start = 0; start < items.length; start += ROW_SIZE) {
    rows.push(items.slice(start, start + ROW_SIZE));
  }
  return rows;
}

export default function TechStack() {
  const { status, data, error, retry } = useSection<TechStackContent>(
    SECTION_SLUGS.techStack,
  );

  if (status === "loading") return <TechStackSkeleton />;

  if (status === "error") {
    return (
      <SectionError
        label="Tech Stacks"
        error={error}
        onRetry={retry}
        tone="light"
      />
    );
  }

  const { eyebrow, heading, description, items } = data;
  const rows = toRows(items);

  return (
    <section id="tech-stack" className="scroll-mt-24 bg-surface">
      <Container className="split-grid py-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <div>
          <h3 className="text-2xl font-bold text-ink md:text-3xl">{heading}</h3>
          <p className="mt-3 text-ink">{description}</p>
        </div>
      </Container>

      <div className="mt-10 flex flex-col gap-4 pb-16">
        {rows.map((row, index) => (
          <TechStackRow
            key={index}
            items={row}
            reverse={index % 2 === 1 /* alternate direction */}
          />
        ))}
      </div>
    </section>
  );
}
