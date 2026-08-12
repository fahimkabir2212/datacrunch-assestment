import { useState } from "react";
import type { MegaMenuItem } from "../../../types/content";

interface MegaMenuCardProps {
  item: MegaMenuItem;
  onNavigate: () => void;
}

export default function MegaMenuCard({ item, onNavigate }: MegaMenuCardProps) {
  const [showImage, setShowImage] = useState(true);

  return (
    <li>
      <a
        href={item.href}
        onClick={onNavigate}
        className="group relative flex aspect-4/3 overflow-hidden rounded-xl bg-surface-emphasis ring-1 ring-ink-inverse/10 transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {showImage && (
          <img
            src={item.image.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            onError={() => setShowImage(false)}
            className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
          />
        )}

        {/* Keeps the label legible once the photo fades in. */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        />

        <span className="relative m-5 max-w-[12ch] text-lg leading-tight font-bold text-brand transition-colors duration-300 group-hover:text-ink-inverse group-focus-visible:text-ink-inverse motion-reduce:transition-none md:text-xl">
          {item.label}
        </span>
      </a>
    </li>
  );
}
