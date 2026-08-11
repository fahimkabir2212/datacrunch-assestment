import Container from "../../ui/Container";
import TrustedByLogos from "./TrustedByLogos";
import { trustedByLogos } from "../../../data/home/trustedByLogos";

export default function TrustedBy() {
  return (
    <Container as="section" className="mt-20">
      <div className="grid grid-cols-1 items-start gap-7.5 lg:grid-cols-12 lg:justify-between">
        <h2 className="text-white text-2xl lg:text-xl col-span-4 lg:max-w-2/3">
          <span className="text-brand">Trusted by</span> product teams and
          enterprise <span className="text-brand">innovators.</span>
        </h2>
        <TrustedByLogos logos={trustedByLogos} className="col-span-8" />
      </div>
    </Container>
  );
}
