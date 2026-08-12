import { useState } from "react";
import type { HeaderContent } from "../../../types/content";

interface MobileNavProps {
  header: HeaderContent;
  onNavigate: () => void;
}

export default function MobileNav({ header, onNavigate }: MobileNavProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <nav aria-label="Main" className="border-t border-ink-inverse/10 px-4 py-4 md:hidden">
      <ul className="flex flex-col gap-1">
        {header.items.map((item) => {
          const isExpanded = expandedId === item.id;

          if (!item.menu) {
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={onNavigate}
                  className="block rounded-lg px-2 py-3 font-semibold text-ink-inverse"
                >
                  {item.label}
                </a>
              </li>
            );
          }

          return (
            <li key={item.id}>
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`mobile-menu-${item.id}`}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-3 font-semibold text-ink-inverse"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>

              {isExpanded && (
                <ul id={`mobile-menu-${item.id}`} className="flex flex-col gap-1 pb-2 pl-2">
                  {item.menu.map((entry) => (
                    <li key={entry.id}>
                      <a
                        href={entry.href}
                        onClick={onNavigate}
                        className="block rounded-lg px-2 py-2 text-sm font-semibold text-brand"
                      >
                        {entry.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <a
        href={header.cta.href}
        onClick={onNavigate}
        className="mt-3 block rounded-xl bg-brand px-5 py-3 text-center font-bold text-on-brand"
      >
        {header.cta.label}
      </a>
    </nav>
  );
}
