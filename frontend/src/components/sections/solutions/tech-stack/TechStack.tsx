import Container from "../../../ui/Container";
import Eyebrow from "../../../ui/Eyebrow";
import { techStackContent } from "../../../../data/home/techStackContent";
import TechStackRow from "./TechStackRow";

const ROW_SIZE = 6;

export default function TechStack() {
  const { eyebrow, heading, description, items } = techStackContent;

  const rows = [
    items.slice(0, ROW_SIZE),
    items.slice(ROW_SIZE, ROW_SIZE * 2),
    items.slice(ROW_SIZE * 2, ROW_SIZE * 3),
  ];

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
            reverse={index === 1 /* middle row */}
          />
        ))}
      </div>
    </section>
  );
}
