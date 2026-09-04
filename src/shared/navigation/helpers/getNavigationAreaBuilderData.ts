import { isAdminRouteBuilderKey } from "@shared/navigation/admin";
import { isClientRouteBuilderKey } from "@shared/navigation/client";

import { navigationAreas } from "../config";
import type { AppRouteBuilderKey } from "../types";

type NavigationAreaBuilderMeta = {
  builderRouteKey: AppRouteBuilderKey;
  pathname?: string;
};
export const getNavigationAreaBuilderMeta = ({
  builderRouteKey,
  pathname,
}: NavigationAreaBuilderMeta) => {
  const area = isAdminRouteBuilderKey(builderRouteKey)
    ? navigationAreas.admin
    : isClientRouteBuilderKey(builderRouteKey)
      ? navigationAreas.client
      : null;

  if (!area) {
    throw new Error(`Invalid route key: ${builderRouteKey}`);
  }
  const builder = area.builders as Record<
    AppRouteBuilderKey,
    (param: string) => string
  >;
  return {
    navigationArea: area,
    urlBuilder: builder[builderRouteKey as keyof typeof builder],
    currentBuilderRouteKey: pathname ? area.findKey(pathname) : undefined,
  };
};
