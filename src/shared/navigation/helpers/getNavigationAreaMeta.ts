import { type AdminRouteKey, isAdminRouteKey } from "@shared/navigation/admin";
import {
  type ClientRouteKey,
  isClientRouteKey,
} from "@shared/navigation/client";

import { navigationAreas } from "../config";

type NavigationAreaMeta = {
  routeKey: AdminRouteKey | ClientRouteKey;
  pathname?: string;
};
export const getNavigationAreaMeta = ({
  routeKey,
  pathname,
}: NavigationAreaMeta) => {
  const area = isAdminRouteKey(routeKey)
    ? navigationAreas.admin
    : isClientRouteKey(routeKey)
      ? navigationAreas.client
      : null;

  if (!area) {
    throw new Error(`Invalid route key: ${routeKey}`);
  }

  return {
    navigationArea: area,
    routeKey,
    url: area.urls[routeKey as keyof typeof area.urls],
    currentRouteKey: pathname ? area.findKey(pathname) : undefined,
  };
};
