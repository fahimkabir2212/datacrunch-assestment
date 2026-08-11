import Container from "../../ui/Container";
import HighlightedText from "../../ui/HighlightedText";
import TrustedByLogos from "./TrustedByLogos";
import { trustedByContent } from "../../../data/home/trustedByContent";

export default function TrustedBy() {
  const { heading, logos } = trustedByContent;

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
