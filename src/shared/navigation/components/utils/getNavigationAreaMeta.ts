import { type AdminRouteKey, isAdminRouteKey } from "@shared/navigation/admin";
import {
  type ClientRouteKey,
  isClientRouteKey,
} from "@shared/navigation/client";

import { navigationAreas } from "../config";

export const getNavigationAreaMeta = (key: AdminRouteKey | ClientRouteKey) => {
  if (isAdminRouteKey(key as AdminRouteKey)) {
    const path = navigationAreas.admin.paths[key as AdminRouteKey];
    const currentRouteKey = navigationAreas.admin.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.admin,
      routeKey: key,
      path,
      currentRouteKey,
    };
  }
  if (isClientRouteKey(key as ClientRouteKey)) {
    const path = navigationAreas.client.paths[key as ClientRouteKey];
    return {
      navigationArea: navigationAreas.client,
      routeKey: key,
      path,
    };
  }
  throw new Error(`Invalid route key: ${key}`);
};
