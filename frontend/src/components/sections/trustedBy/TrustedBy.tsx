import Container from "../../ui/Container";
import HighlightedText from "../../ui/HighlightedText";
import TrustedByLogos from "./TrustedByLogos";
import { trustedByContent } from "../../../data/home/trustedByContent";

export default function TrustedBy() {
  const { heading, logos } = trustedByContent;

  return (
    <Container as="section" className="mt-20">
      <div className="grid grid-cols-1 items-start gap-7.5 lg:grid-cols-12 lg:justify-between">
        <h2 className="text-white text-2xl lg:text-xl col-span-4 lg:max-w-2/3">
          <HighlightedText segments={heading} />
        </h2>
        <TrustedByLogos logos={logos} className="col-span-8" />
      </div>
    </Container>
  );
}
