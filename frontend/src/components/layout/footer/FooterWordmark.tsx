interface FooterWordmarkProps {
  src: string;
  alt: string;
}

const FADE = "linear-gradient(to bottom, #000 55%, transparent 100%)";

export default function FooterWordmark({ src, alt }: FooterWordmarkProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={155}
      height={25}
      loading="lazy"
      decoding="async"
      className="mt-10 w-full"
      style={{ maskImage: FADE, WebkitMaskImage: FADE }}
    />
  );
}
