import type { CSSProperties } from "react";
import type { TechStackItem } from "../../../../types/content";

interface TechStackRowProps {
  items: TechStackItem[];
  reverse?: boolean;
}

const REPEAT_COUNT = 8;

export default function TechStackRow({
  items,
  reverse = false,
}: TechStackRowProps) {
  const repeatedItems = Array.from(
    { length: REPEAT_COUNT },
    () => items,
  ).flat();

  return (
    <div className="overflow-hidden">
      <div
        style={{ "--marquee-reps": REPEAT_COUNT } as CSSProperties}
        className={`flex w-max gap-4 hover:[animation-play-state:paused] ${
          reverse
            ? "motion-safe:animate-marquee-right"
            : "motion-safe:animate-marquee-left"
        }`}
      >
        {repeatedItems.map((item, index) => {
          const isDuplicate = index >= items.length;

          return (
            <div
              key={`${item.id}-${index}`}
              aria-hidden={isDuplicate}
              className={`flex shrink-0 items-center justify-center rounded-xl border border-ink-subtle/30 bg-ink-subtle/20 px-8 py-4 ${
                isDuplicate ? "motion-reduce:hidden" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-10 md:h-16 aspect-video w-auto object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
