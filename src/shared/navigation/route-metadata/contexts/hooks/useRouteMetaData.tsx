import { useState } from "react";

import type { RouteMeta } from "@shared/navigation/route-metadata/types";

import { RouteMetaDataEffect } from "./RouteMetaDataEffect";

export const useRouteMetaData = () => {
  const [routeMetaData, setRouteMetaData] = useState<RouteMeta>({
    title: "",
    favicon: "",
  });

  const updateRouteMetaData = (title?: string, favicon?: string) => {
    setRouteMetaData({ title: title ?? "", favicon: favicon ?? "" });
  };

  RouteMetaDataEffect({
    optionTitle: routeMetaData.title,
    optionFavicon: routeMetaData.favicon,
  });
  return { routeMetaData, updateRouteMetaData };
};

export type RouteMetaDataContextType = ReturnType<typeof useRouteMetaData>;
