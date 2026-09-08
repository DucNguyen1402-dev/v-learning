import type { AppRouteBuilderKey, AppRouteKey } from "@shared/navigation/types";

import {
  ADMIN_ROUTE_BUILDER_KEYS,
  ADMIN_ROUTE_KEYS,
  ADMIN_ROUTE_PATHS,
} from "./registry";
import type { AdminRouteBuilderKey, AdminRouteKey } from "./types";
export const findRouteKey = (path: string) =>
  Object.values(ADMIN_ROUTE_KEYS).find(
    (key) => ADMIN_ROUTE_PATHS[key] === path,
  );

export const isRouteActive = (path: string, key: AdminRouteKey) =>
  ADMIN_ROUTE_PATHS[key] === path;

export const isAdminRouteKey = (key: AppRouteKey) =>
  Object.values(ADMIN_ROUTE_KEYS).includes(key as AdminRouteKey);

export const isAdminRouteBuilderKey = (
  key: AppRouteBuilderKey,
): key is AdminRouteBuilderKey =>
  Object.values(ADMIN_ROUTE_BUILDER_KEYS).includes(key as AdminRouteBuilderKey);
