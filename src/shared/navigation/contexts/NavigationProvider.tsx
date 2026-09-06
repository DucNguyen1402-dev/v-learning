import type { ReactNode } from "react";

import { NavigationContext } from "./NavigationContext";

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  return (
    <NavigationContext.Provider value={null}>
      {children}
    </NavigationContext.Provider>
  );
};
