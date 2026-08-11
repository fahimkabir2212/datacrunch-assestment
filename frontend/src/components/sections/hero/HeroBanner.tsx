export default function HeroBanner() {
  return (
    <div className="hero-banner-notch relative w-full overflow-hidden rounded-2xl">
      <img
        src="/images/home/hero.webp"
        alt="A diverse team smiling together, encircled by a glowing network of connected data points"
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
        className="absolute inset-x-0 bottom-0 mx-auto w-3/4 opacity-30 brightness-0 invert"
      />
    </div>
  );
}
