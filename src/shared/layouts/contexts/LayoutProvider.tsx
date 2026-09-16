import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { getRouteHistory } from "@shared/navigation";

import { LayoutContext } from "./LayoutContext";

type LayoutProviderProps = {
  children: ReactNode;
};
export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const historyRoute = getRouteHistory({ location });
  const shouldShowBackButton = historyRoute.length > 0;
  const value = useMemo(
    () => ({
      shouldShowBackButton,
      isSidebarOpen,
      toggleSidebar,
    }),
    [shouldShowBackButton, isSidebarOpen, toggleSidebar],
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
