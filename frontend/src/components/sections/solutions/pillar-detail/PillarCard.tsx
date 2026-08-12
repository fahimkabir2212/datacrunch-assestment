interface PillarCardProps {
  title: string;
  description: string;
}

export default function PillarCard({ title, description }: PillarCardProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl bg-canvas transition-colors duration-500 ease-in-out md:bg-surface md:hover:bg-canvas">
      <h4 className="absolute inset-x-8 top-8 translate-y-0 text-left text-lg font-bold text-brand transition-all duration-500 ease-in-out md:top-1/2 md:-translate-y-1/2 md:text-center md:text-ink md:text-xl md:group-hover:top-8 md:group-hover:translate-y-0 md:group-hover:text-left md:group-hover:text-brand">
        {title}
      </h4>

      <p className="absolute inset-x-8 bottom-8 translate-y-0 text-left text-sm text-white/70 opacity-100 transition-all duration-500 ease-in-out md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        {description}
      </p>
    </div>
  );
}
