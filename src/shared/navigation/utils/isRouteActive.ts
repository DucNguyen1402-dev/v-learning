import { AdminNavigation, type AdminRouteKey } from "../admin";
import { ClientNavigation, type ClientRouteKey } from "../client";

export const isRouteActive = (
  path: string,
  key: AdminRouteKey | ClientRouteKey,
) => {
  if (key in AdminNavigation.urls) {
    return AdminNavigation.urls[key as AdminRouteKey] === path;
  }
  if (key in ClientNavigation.urls) {
    return ClientNavigation.urls[key as ClientRouteKey] === path;
  }
  throw new Error(
    `Route key "${key}" not found in Admin or Client navigation URLs.`,
  );
};
