import { useContext } from "react";

import { RouteMetaDataContext } from "./RouteMetaDataContext";

export const useRouteMetaDataContext = () => {
  const context = useContext(RouteMetaDataContext);
  if (!context) {
    throw new Error(
      "useRouteMetaDataContext must be used within a RouteMetaDataProvider",
    );
  }
  return context;
};
