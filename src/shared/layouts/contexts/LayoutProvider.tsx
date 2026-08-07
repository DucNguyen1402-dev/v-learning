import { useMemo } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { LayoutContext } from "./LayoutContext";

type LayoutProviderProps = {
  children: ReactNode;
};
const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const location = useLocation();

  const historyRoute = location.state?.history ?? [];
  console.log(location.state);
  const value = useMemo(
    () => ({
      shouldShowBackButton: historyRoute.length > 0,
    }),
    [historyRoute.length],
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
