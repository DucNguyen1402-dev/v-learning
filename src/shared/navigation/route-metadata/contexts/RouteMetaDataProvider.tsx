import type { ReactNode } from "react";

import { useRouteMetaData } from "./hooks";
import { RouteMetaDataContext } from "./RouteMetaDataContext";
type RouteMetaDataProviderProps = {
  children: ReactNode;
};

export const RouteMetaDataProvider = ({
  children,
}: RouteMetaDataProviderProps) => {
  const value = useRouteMetaData();
  return (
    <RouteMetaDataContext.Provider value={value}>
      {children}
    </RouteMetaDataContext.Provider>
  );
};
