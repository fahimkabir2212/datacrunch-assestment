import { createContext, useContext } from "react";

export interface SolutionsTabContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const SolutionsTabContext =
  createContext<SolutionsTabContextValue | null>(null);

export function useSolutionsTab() {
  const ctx = useContext(SolutionsTabContext);
  if (!ctx) throw new Error("useSolutionsTab must be used within <Solutions>");
  return ctx;
}
