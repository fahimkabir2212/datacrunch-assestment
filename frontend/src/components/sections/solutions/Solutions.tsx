import type { ReactNode } from "react";

interface SolutionsProps {
  children: ReactNode;
}

export default function Solutions({ children }: SolutionsProps) {
  return <div className="relative bg-surface-subtle pt-6">{children}</div>;
}
