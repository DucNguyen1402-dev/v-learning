import {
  isAdminRouteBuilderKey,
  isClientRouteBuilderKey,
  NavigationAreas,
} from "../areas";
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
    ? NavigationAreas.admin
    : isClientRouteBuilderKey(builderRouteKey)
      ? NavigationAreas.client
      : null;

  if (!area) {
    throw new Error(`Invalid route key: ${builderRouteKey}`);
  }
  const builder = area.pathBuilders as Record<
    AppRouteBuilderKey,
    (param: string) => string
  >;
  return {
    navigationArea: area,
    pathBuilder: builder[builderRouteKey as keyof typeof builder],
    currentBuilderRouteKey: pathname ? area.findKey(pathname) : undefined,
  };
};
