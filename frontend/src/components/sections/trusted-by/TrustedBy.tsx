import Container from "../../ui/Container";
import HighlightedText from "../../ui/HighlightedText";
import TrustedByLogos from "./TrustedByLogos";
import TrustedBySkeleton from "./TrustedBySkeleton";
import SectionError from "../../feedback/SectionError";
import { useSection } from "../../../hooks/useSection";
import { SECTION_SLUGS } from "../../../constants/sections";
import type { TrustedByContent } from "../../../types/content";

export default function TrustedBy() {
  const { status, data, error, retry } = useSection<TrustedByContent>(
    SECTION_SLUGS.trustedBy,
  );

  if (status === "loading") return <TrustedBySkeleton />;

  if (status === "error") {
    return <SectionError label="Trusted by" error={error} onRetry={retry} />;
  }

  const { heading, logos } = data;

  return (
    <Container as="section" className="mt-20">
      <div className="split-grid">
        <h2 className="text-white text-2xl lg:text-xl lg:max-w-2/3">
          <HighlightedText segments={heading} />
        </h2>
        <TrustedByLogos logos={logos} />
      </div>
    </Container>
  );
}
