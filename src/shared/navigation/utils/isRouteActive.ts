import { AdminNavigation, type AdminRouteKey } from "../areas/admin";
import { ClientNavigation, type ClientRouteKey } from "../areas/client";
import type { AppRouteKey } from "../types";

export const isRouteActive = (path: string, key: AppRouteKey) => {
  if (key in AdminNavigation.paths) {
    return AdminNavigation.paths[key as AdminRouteKey] === path;
  }
  if (key in ClientNavigation.paths) {
    return ClientNavigation.paths[key as ClientRouteKey] === path;
  }
  throw new Error(
    `Route key "${key}" not found in Admin or Client navigation URLs.`,
  );
};
