import type { TrustedByLogo } from "../../../types/content";

interface TrustedByLogosProps {
  logos: TrustedByLogo[];
  className?: string;
}

export default function TrustedByLogos({
  logos,
  className = "",
}: TrustedByLogosProps) {
  return (
    <div
      className={`grid grid-cols-2 border-t border-l border-ink-inverse-subtle sm:grid-cols-4 ${className}`.trim()}
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex items-center justify-center border-r border-b border-ink-inverse-subtle px-6 py-8"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="h-10 w-auto object-contain md:h-7"
          />
        </div>
      ))}
    </div>
  );
}
