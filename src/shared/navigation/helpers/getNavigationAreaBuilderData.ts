import {
  type AdminRouteBuilderKey,
  isAdminBuilderKey,
} from "@shared/navigation/admin";
import {
  type ClientRouteBuilderKey,
  isClientRouteBuilderKey,
} from "@shared/navigation/client";

import { navigationAreas } from "../config";

type NavigationAreaMeta = {
  area: "admin" | "client";
  builderRouteKey: AdminRouteBuilderKey | ClientRouteBuilderKey;
};
export const getNavigationAreaBuilderMeta = ({
  area,
  builderRouteKey,
}: NavigationAreaMeta) => {
  if (isAdminBuilderKey(builderRouteKey) && area === "admin") {
    const builderUrl = navigationAreas.admin.builders[builderRouteKey];
    const currentRouteKey = navigationAreas.admin.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.admin,
      builderUrl,
      currentRouteKey,
    };
  }
  if (isClientRouteBuilderKey(builderRouteKey) && area === "client") {
    const builderUrl = navigationAreas.client.builders[builderRouteKey];
    const currentRouteKey = navigationAreas.client.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.client,
      builderUrl,
      currentRouteKey,
    };
  }
  throw new Error(`Invalid route key: ${builderRouteKey}`);
};
