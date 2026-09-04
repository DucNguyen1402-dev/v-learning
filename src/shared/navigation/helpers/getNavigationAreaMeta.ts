import { type AdminRouteKey, isAdminRouteKey } from "@shared/navigation/admin";
import {
  type ClientRouteKey,
  isClientRouteKey,
} from "@shared/navigation/client";

import { navigationAreas } from "../config";

type NavigationAreaMeta = {
  routeKey: AdminRouteKey | ClientRouteKey;
};
export const getNavigationAreaMeta = ({ routeKey }: NavigationAreaMeta) => {
  if (isAdminRouteKey(routeKey as AdminRouteKey)) {
    const url = navigationAreas.admin.urls[routeKey as AdminRouteKey];
    const currentRouteKey = navigationAreas.admin.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.admin,
      routeKey: routeKey,
      url,
      currentRouteKey,
    };
  }
  if (isClientRouteKey(routeKey as ClientRouteKey)) {
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
