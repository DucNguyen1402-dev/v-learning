import { isAdminRouteKey } from "../areas/admin";
import { isClientRouteKey } from "../areas/client";
import { NavigationAreas } from "../areas/NavigationAreas";
import type { AppRouteKey } from "../types";

type NavigationAreaMeta = {
  routeKey: AppRouteKey;
  pathname?: string;
};
export const getNavigationAreaMeta = ({
  routeKey,
  pathname,
}: NavigationAreaMeta) => {
  if (isAdminRouteKey(routeKey)) {
    return {
      navigationArea: NavigationAreas.admin,
      path: NavigationAreas.admin.paths[routeKey],
      currentRouteKey: pathname
        ? NavigationAreas.admin.findKey(pathname)
        : undefined,
    };
  }

  if (isClientRouteKey(routeKey)) {
    return {
      navigationArea: NavigationAreas.client,
      path: NavigationAreas.client.paths[routeKey],
      currentRouteKey: pathname
        ? NavigationAreas.client.findKey(pathname)
        : undefined,
    };
  }

  throw new Error(`Invalid route key: ${routeKey}`);
};
