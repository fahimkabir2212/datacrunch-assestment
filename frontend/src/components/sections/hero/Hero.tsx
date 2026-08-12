import { useState } from "react";
import Button from "../../ui/buttons/Button";
import PlayButton from "../../ui/buttons/PlayButton";
import Container from "../../ui/Container";
import HighlightedText from "../../ui/HighlightedText";
import VideoModal from "../../ui/VideoModal";
import HeroBanner from "./HeroBanner";
import HeroSkeleton from "./HeroSkeleton";
import SectionError from "../../feedback/SectionError";
import { useSection } from "../../../hooks/useSection";
import { SECTION_SLUGS } from "../../../constants/sections";
import type { HeroContent } from "../../../types/content";

export default function Hero() {
  const { status, data, error, retry } = useSection<HeroContent>(
    SECTION_SLUGS.hero,
  );

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (status === "loading") return <HeroSkeleton />;

  if (status === "error") {
    return <SectionError label="Hero" error={error} onRetry={retry} />;
  }

  const { headline, description, primaryCta, banner, video } = data;

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
            <Button className="mt-6">{primaryCta}</Button>
          </div>
        </div>

        <div className="mt-8 md:mt-20 relative flex w-full flex-col gap-5 md:block">
          <PlayButton
            onClick={() => setIsVideoOpen(true)}
            className="relative z-10 md:absolute md:inset-x-0 md:top-0 md:mx-auto md:-translate-y-1/2"
          />
          <HeroBanner image={banner.image} />
        </div>
      </div>

      <VideoModal
        open={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        video={video}
      />
    </Container>
  );
}
