import { isAdminRouteKey, isClientRouteKey, NavigationAreas } from "../areas";
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
    ? NavigationAreas.admin
    : isClientRouteKey(routeKey)
      ? NavigationAreas.client
      : null;

  if (!area) {
    throw new Error(`Invalid route key: ${routeKey}`);
  }

  return {
    navigationArea: area,
    path: area.paths[routeKey as keyof typeof area.paths],
    currentRouteKey: pathname ? area.findKey(pathname) : undefined,
  };
};
