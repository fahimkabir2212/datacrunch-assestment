import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import HighlightedText from "../ui/HighlightedText";
import { aboutContent } from "../../data/home/aboutContent";

export default function About() {
  const { eyebrow, heading } = aboutContent;

  return (
    <section className="mt-10 bg-white">
      <Container className="split-grid py-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-2 text-ink text-xl md:text-2xl md:max-w-lg">
          <HighlightedText segments={heading} />
        </h3>
      </Container>
    </section>
  );
}
