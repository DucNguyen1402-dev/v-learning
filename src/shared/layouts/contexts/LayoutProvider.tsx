import { useMemo } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { getRouteHistory } from "@shared/navigation";

import { LayoutContext } from "./LayoutContext";

type LayoutProviderProps = {
  children: ReactNode;
};
export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const location = useLocation();

  const historyRoute = getRouteHistory({ location });
  const shouldShowBackButton = historyRoute.length > 0;
  const value = useMemo(
    () => ({
      shouldShowBackButton,
    }),
    [shouldShowBackButton],
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
