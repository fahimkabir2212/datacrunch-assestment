import Container from "../../ui/Container";
import Eyebrow from "../../ui/Eyebrow";
import HighlightedText from "../../ui/HighlightedText";
import AboutSkeleton from "./AboutSkeleton";
import SectionError from "../../feedback/SectionError";
import { useSection } from "../../../hooks/useSection";
import { SECTION_SLUGS } from "../../../constants/sections";
import type { AboutContent } from "../../../types/content";

export default function About() {
  const { status, data, error, retry } = useSection<AboutContent>(
    SECTION_SLUGS.about,
  );

  if (status === "loading") return <AboutSkeleton />;

  if (status === "error") {
    return (
      <SectionError label="We Are" error={error} onRetry={retry} tone="light" />
    );
  }

  const { eyebrow, heading } = data;

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
