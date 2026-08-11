interface PlayButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function PlayButton({
  onClick,
  className = "",
}: PlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Play demo video"
      className={`block relative size-24 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${className}`.trim()}
    >
      {/* layer 1 — outer ring, the only layer that animates */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-brand/25 motion-safe:animate-pulse-ring"
      />

      {/* layer 2 — middle ring, static */}
      <span
        aria-hidden="true"
        className="absolute inset-2 rounded-full bg-brand/50"
      />

      {/* layer 3 — solid core + play triangle, static (original path/geometry, just cropped viewBox) */}
      <svg
        viewBox="20 20 60 60"
        className="absolute inset-4"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="30" className="fill-brand" />
        <path
          d="M60.5 47.4019C62.5 48.5566 62.5 51.4434 60.5 52.5981L47 60.3923C45 61.547 42.5 60.1036 42.5 57.7942L42.5 42.2058C42.5 39.8964 45 38.453 47 39.6077L60.5 47.4019Z"
          className="fill-on-brand"
        />
      </svg>
    </button>
  );
}
