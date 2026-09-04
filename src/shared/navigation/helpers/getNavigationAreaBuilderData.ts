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
  builderRouteKey: AdminRouteBuilderKey | ClientRouteBuilderKey;
};
export const getNavigationAreaBuilderMeta = ({
  builderRouteKey,
}: NavigationAreaMeta) => {
  if (isAdminBuilderKey(builderRouteKey)) {
    const builderUrl = navigationAreas.admin.builders[builderRouteKey];
    const currentRouteKey = navigationAreas.admin.findKey(location.pathname);
    return {
      navigationArea: navigationAreas.admin,
      builderUrl,
      currentRouteKey,
    };
  }
  if (isClientRouteBuilderKey(builderRouteKey)) {
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
