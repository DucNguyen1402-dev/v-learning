import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getRouteMetadata, getRouteMetadataWithBuilderKey } from "./helper";
import { setFavicon } from "./utils";

export const RouteMetaData = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const builderKey = location.state?.routeBuilderKey;

  useEffect(() => {
    if (!builderKey) {
      const { title, favicon } = getRouteMetadata(pathname);

      document.title = title;

      setFavicon(favicon);
      return;
    }
    const { title, favicon } = getRouteMetadataWithBuilderKey(builderKey);

    document.title = title;

    setFavicon(favicon);
  }, [builderKey, pathname]);

  return null;
};
