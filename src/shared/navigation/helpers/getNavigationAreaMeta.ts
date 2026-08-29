import {
  type AdminRouteBuilderKey,
  type AdminRouteKey,
  isAdminRouteKey,
} from "@shared/navigation/admin";
import {
  type ClientRouteBuilderKey,
  type ClientRouteKey,
  isClientRouteKey,
} from "@shared/navigation/client";

import { navigationAreas } from "../config";

type NavigationAreaMeta = {
  area: "admin" | "client";

  routeKey:
    | AdminRouteKey
    | ClientRouteKey
    | AdminRouteBuilderKey
    | ClientRouteBuilderKey;
};
export const getNavigationAreaMeta = ({
  area,
  routeKey,
}: NavigationAreaMeta) => {
  if (isAdminRouteKey(routeKey as AdminRouteKey) && area === "admin") {
    const url = navigationAreas.admin.urls[routeKey as AdminRouteKey];
    const currentRouteKey = navigationAreas.admin.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.admin,
      routeKey: routeKey,
      url,
      currentRouteKey,
    };
  }
  if (isClientRouteKey(routeKey as ClientRouteKey) && area === "client") {
    const url = navigationAreas.client.urls[routeKey as ClientRouteKey];
    const currentRouteKey = navigationAreas.client.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.client,
      routeKey: routeKey,
      url,
      currentRouteKey,
    };
  }
  throw new Error(`Invalid route key: ${routeKey}`);
};
