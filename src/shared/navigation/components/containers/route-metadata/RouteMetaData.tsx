import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getRouteMetadata, getRouteMetadataWithBuilderKey } from "./helpers";
import type { RouteMetaContext } from "./types";
import { useRouteMetaContext } from "./useRouteMetaContext";
import { setFavicon } from "./utils";

export const RouteMetaData = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const routeMetaContext = useRouteMetaContext<RouteMetaContext>();

  useEffect(() => {
    if (!routeMetaContext) {
      const { title, favicon } = getRouteMetadata(pathname);

      document.title = title;

      setFavicon(favicon);
      return;
    }
    const { title, favicon } = getRouteMetadataWithBuilderKey(
      routeMetaContext.builderRouteKey,
    );

    document.title = title;

    setFavicon(favicon);
  }, [routeMetaContext, pathname]);

  return null;
};
