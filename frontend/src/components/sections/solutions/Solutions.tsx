import { useState } from "react";
import type { ReactNode } from "react";
import { SolutionsTabContext } from "../../../context/Solutions";
import { solutionsContent } from "../../../data/home/solutionsContent";

interface SolutionsProps {
  children: ReactNode;
}

export default function Solutions({ children }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState(solutionsContent.tabs[0].id);

  return (
    <SolutionsTabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="relative">{children}</div>
    </SolutionsTabContext.Provider>
  );
}
