import {
  type AdminRouteBuilderKey,
  isAdminBuilderKey,
} from "@shared/navigation/admin";
import {
  type ClientRouteBuilderKey,
  isClientRouteBuilderKey,
} from "@shared/navigation/client";

import { navigationAreas } from "../config";

type NavigationAreaBuilderMeta = {
  builderRouteKey: AdminRouteBuilderKey | ClientRouteBuilderKey;
  pathname?: string;
};
export const getNavigationAreaBuilderMeta = ({
  builderRouteKey,
  pathname,
}: NavigationAreaBuilderMeta) => {
  const area = isAdminBuilderKey(builderRouteKey)
    ? navigationAreas.admin
    : isClientRouteBuilderKey(builderRouteKey)
      ? navigationAreas.client
      : null;

  if (!area) {
    throw new Error(`Invalid route key: ${builderRouteKey}`);
  }
  const builder = area.builders as Record<
    AdminRouteBuilderKey | ClientRouteBuilderKey,
    (param: string) => string
  >;
  return {
    navigationArea: area,
    builderRouteKey,
    urlBuilder: builder[builderRouteKey as keyof typeof builder],
    currentRouteKey: pathname ? area.findKey(pathname) : undefined,
  };
};
