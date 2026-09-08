import type { AppRouteBuilderKey, AppRouteKey } from "@shared/navigation/types";

import {
  ADMIN_ROUTE_PATHS,
  adminRouteBuilderKeys,
  adminRouteKeys,
} from "./constant";
import type { AdminRouteBuilderKey, AdminRouteKey } from "./types";
export const findRouteKey = (path: string) =>
  adminRouteKeys.find((key) => ADMIN_ROUTE_PATHS[key] === path);

export const isRouteActive = (path: string, key: AdminRouteKey) =>
  ADMIN_ROUTE_PATHS[key] === path;

export const isAdminRouteKey = (key: AppRouteKey) =>
  adminRouteKeys.includes(key as AdminRouteKey);

export const isAdminRouteBuilderKey = (
  key: AppRouteBuilderKey,
): key is AdminRouteBuilderKey =>
  adminRouteBuilderKeys.includes(key as AdminRouteBuilderKey);
