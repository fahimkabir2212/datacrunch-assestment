import MegaMenuCard from "./MegaMenuCard";
import type { MegaMenuItem } from "../../../types/content";

interface MegaMenuProps {
  id: string;
  items: MegaMenuItem[];
  onNavigate: () => void;
}

export default function MegaMenu({ id, items, onNavigate }: MegaMenuProps) {
  return (
    <div id={id} className="px-3 pb-3">
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MegaMenuCard key={item.id} item={item} onNavigate={onNavigate} />
        ))}
      </ul>
    </div>
  );
}
