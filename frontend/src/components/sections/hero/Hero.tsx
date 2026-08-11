import PlayButton from "../../ui/buttons/PlayButton";
import Container from "../../ui/Container";
import TrustedByLogos from "./TrustedByLogos";
import { trustedByLogos } from "../../../data/home/trustedByLogos";
import HeroBanner from "./HeroBanner";

export default function Hero() {
  return (
    <Container as="section">
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-start flex-col gap-7.5 lg:flex-row lg:items-center">
          <h1 className="text-white font-extrabold text-5xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.05] lg:leading-[1.05]">
            Building <span className="text-brand">Intelligence to Power</span>{" "}
            Scalable Innovation
          </h1>
          <div>
            <p className="font-light text-sm text-white/80 md:text-base">
              MetaTech integrates custom software engineering, advanced data and
              AI systems, and strategic staff augmentation to power scalable,
              high impact digital transformation.
            </p>
            <button
              type="button"
              className="mt-6 bg-brand font-bold text-ink py-3 px-4 rounded-lg hover:bg-brand-hover cursor-pointer"
            >
              Book for Demo
            </button>
          </div>
        </div>

        <div className="mt-8 lg:mt-20 relative flex w-full flex-col lg:items-center gap-5 lg:block">
          <PlayButton className="relative z-10 lg:absolute lg:inset-x-0 lg:top-0 lg:z-10 lg:mx-auto lg:-translate-y-1/2" />
          <HeroBanner />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 items-start lg:justify-between gap-7.5">
        <h2 className="text-white text-2xl lg:text-xl col-span-4 lg:max-w-2/3">
          <span className="text-brand">Trusted by</span> product teams and
          enterprise <span className="text-brand">innovators.</span>
        </h2>
        <TrustedByLogos logos={trustedByLogos} className="col-span-8" />
      </div>
    </Container>
  );
}
