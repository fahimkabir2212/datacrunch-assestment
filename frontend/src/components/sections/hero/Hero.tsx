import PlayButton from "../../ui/buttons/PlayButton";
import Container from "../../ui/Container";
import HighlightedText from "../../ui/HighlightedText";
import HeroBanner from "./HeroBanner";
import HeroSkeleton from "./HeroSkeleton";
import SectionError from "../../feedback/SectionError";
import { useSection } from "../../../hooks/useSection";
import { SECTION_SLUGS } from "../../../constants/sections";

export default function Hero() {
  const { status, data, error, retry } = useSection(SECTION_SLUGS.hero);

  if (status === "loading") return <HeroSkeleton />;

  if (status === "error") {
    return <SectionError label="Hero" error={error} onRetry={retry} />;
  }

  const { headline, description, primaryCta, banner } = data;

  return (
    <Container as="section" className="mt-20">
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-start flex-col gap-7.5 lg:flex-row lg:items-center">
          <h1 className="text-white font-extrabold text-5xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.05] lg:leading-[1.05]">
            <HighlightedText segments={headline} />
          </h1>
          <div>
            <p className="font-light text-sm text-white/80 md:text-base">
              {description}
            </p>
            <button
              type="button"
              className="mt-6 bg-brand font-bold text-ink py-3 px-4 rounded-lg hover:bg-brand-hover cursor-pointer"
            >
              {primaryCta}
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-20 relative flex w-full flex-col gap-5 md:block">
          <PlayButton className="relative z-10 md:absolute md:inset-x-0 md:top-0 md:mx-auto md:-translate-y-1/2" />
          <HeroBanner image={banner.image} />
        </div>
      </div>
    </Container>
  );
}
