import type { HeroContent } from "../../../types/content";

interface HeroBannerProps {
  image: HeroContent["banner"]["image"];
}

export default function HeroBanner({ image }: HeroBannerProps) {
  return (
    <div className="hero-banner-notch relative w-full overflow-hidden rounded-2xl">
      <img
        src={image.src}
        alt={image.alt}
        width={626}
        height={351}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="aspect-video md:aspect-1400/571 w-full object-cover brightness-60"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial from-brand/40 via-brand/10 to-transparent"
      />

      <img
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        width={155}
        height={25}
        loading="lazy"
        decoding="async"
        className="absolute inset-x-0 bottom-0 mx-auto w-3/4 opacity-30 brightness-0 invert"
      />
    </div>
  );
}
