interface PillarCardProps {
  title: string;
  description: string;
}

export default function PillarCard({ title, description }: PillarCardProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl bg-surface transition-colors duration-500 ease-in-out hover:bg-canvas">
      <h4 className="absolute inset-x-8 top-1/2 -translate-y-1/2 text-center text-lg font-bold text-ink transition-all duration-500 ease-in-out group-hover:top-8 group-hover:translate-y-0 group-hover:text-left group-hover:text-brand md:text-xl">
        {title}
      </h4>

      <p className="absolute inset-x-8 bottom-8 translate-y-2 text-left text-sm text-white/70 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        {description}
      </p>
    </div>
  );
}
