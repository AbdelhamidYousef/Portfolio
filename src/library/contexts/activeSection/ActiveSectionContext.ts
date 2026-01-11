import { createContext, type MutableRefObject } from 'react';

export interface ActiveSectionContextType {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  sectionsRef: MutableRefObject<HTMLElement[]>;
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
