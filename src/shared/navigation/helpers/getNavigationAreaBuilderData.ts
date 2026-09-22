import { isAdminRouteBuilderKey } from "../areas/admin";
import { isClientRouteBuilderKey } from "../areas/client";
import { NavigationAreas } from "../areas/NavigationAreas";
import type { AppRouteBuilderKey } from "../types";

type NavigationAreaBuilderMeta = {
  builderRouteKey: AppRouteBuilderKey;
  pathname?: string;
};

export const getNavigationAreaBuilderMeta = ({
  builderRouteKey,
  pathname,
}: NavigationAreaBuilderMeta) => {
  if (isAdminRouteBuilderKey(builderRouteKey)) {
    return {
      navigationArea: NavigationAreas.admin,
      pathBuilder: NavigationAreas.admin.pathBuilders[builderRouteKey],
      currentBuilderRouteKey: pathname
        ? NavigationAreas.admin.findKey(pathname)
        : undefined,
    };
  }

  if (isClientRouteBuilderKey(builderRouteKey)) {
    return {
      navigationArea: NavigationAreas.client,
      pathBuilder: NavigationAreas.client.pathBuilders[builderRouteKey],
      currentBuilderRouteKey: pathname
        ? NavigationAreas.client.findKey(pathname)
        : undefined,
    };
  }
  throw new Error(`Invalid route key: ${builderRouteKey}`);
};
