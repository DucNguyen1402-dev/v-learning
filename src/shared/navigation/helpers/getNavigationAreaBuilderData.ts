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
  if (
    isAdminBuilderKey(builderRouteKey as AdminRouteBuilderKey) &&
    area === "admin"
  ) {
    const builderUrl =
      navigationAreas.admin.builders[builderRouteKey as AdminRouteBuilderKey];
    const currentRouteKey = navigationAreas.admin.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.admin,
      builderUrl,
      currentRouteKey,
    };
  }
  if (
    isClientRouteBuilderKey(builderRouteKey as ClientRouteBuilderKey) &&
    area === "client"
  ) {
    const builderUrl =
      navigationAreas.client.builders[builderRouteKey as ClientRouteBuilderKey];
    const currentRouteKey = navigationAreas.client.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.client,
      builderUrl,
      currentRouteKey,
    };
  }
  throw new Error(`Invalid route key: ${builderRouteKey}`);
};
