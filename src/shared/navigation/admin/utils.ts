import type { ClientRouteBuilderKey, ClientRouteKey } from "../client";
import {
  ADMIN_ROUTE_URLS,
  type AdminRouteBuilderKey,
  adminRouteBuilderKeys,
  type AdminRouteKey,
  adminRouteKeys,
} from "./constants";
export const findRouteKey = (path: string) => {
  const key = Object.keys(ADMIN_ROUTE_URLS).find(
    (key) => ADMIN_ROUTE_URLS[key as keyof typeof ADMIN_ROUTE_URLS] === path,
  );
  return key as keyof typeof ADMIN_ROUTE_URLS | undefined;
};

export const isRouteActive = (
  path: string,
  key: keyof typeof ADMIN_ROUTE_URLS | null,
) => key !== null && ADMIN_ROUTE_URLS[key] === path;

export const isAdminRouteKey = (key: AdminRouteKey | ClientRouteKey) => {
  return adminRouteKeys.includes(key as AdminRouteKey);
};

export const isAdminBuilderKey = (
  key: AdminRouteBuilderKey | ClientRouteBuilderKey,
): key is AdminRouteBuilderKey =>
  adminRouteBuilderKeys.includes(key as AdminRouteBuilderKey);
