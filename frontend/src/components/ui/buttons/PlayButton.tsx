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
      className={`block relative size-24 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${className}`.trim()}
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

      <span
        aria-hidden="true"
        className="absolute inset-4 rounded-full bg-brand"
      />

      <svg
        viewBox="0 0 24 24"
        width="30%"
        height="30%"
        className="absolute inset-x-8 inset-y-9 lg:insert-x-9 lg:inset-y-8.5"
        aria-hidden="true"
      >
        <path
          d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
          className="fill-on-brand"
        />
      </svg>
    </button>
  );
}
