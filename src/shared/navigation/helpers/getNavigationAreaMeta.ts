import { isAdminRouteKey, isClientRouteKey } from "../areas";
import { navigationAreas } from "../config";
import type { AppRouteKey } from "../types";

type NavigationAreaMeta = {
  routeKey: AppRouteKey;
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
    url: area.urls[routeKey as keyof typeof area.urls],
    currentRouteKey: pathname ? area.findKey(pathname) : undefined,
  };
};
