import type { ReactNode } from "react";
import type { HighlightedTextSegment } from "../../types/content";

interface HighlightedTextProps {
  segments: HighlightedTextSegment[];
}

export default function HighlightedText({ segments }: HighlightedTextProps) {
  const visible = segments.filter((segment) => segment.text);

  const nodes = visible.flatMap((segment, index): ReactNode[] => {
    const emphasisClass = [
      segment.highlight && "text-brand",
      segment.bold && "font-extrabold",
    ]
      .filter(Boolean)
      .join(" ");

    const node = emphasisClass ? (
      <span key={index} className={emphasisClass}>
        {segment.text}
      </span>
    ) : (
      segment.text
    );

    return index === 0 ? [node] : [" ", node];
  });

  return <>{nodes}</>;
}
