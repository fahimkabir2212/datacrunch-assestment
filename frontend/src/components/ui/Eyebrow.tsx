interface EyebrowProps {
  children: string;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-1 text-sm font-medium text-ink-subtle md:text-base ${className}`.trim()}
    >
      <span>{children}</span>
      <span aria-hidden="true">/&gt;</span>
    </p>
  );
}
