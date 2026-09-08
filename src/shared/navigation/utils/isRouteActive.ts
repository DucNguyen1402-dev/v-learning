import { AdminNavigation } from "../areas/admin";
import { ClientNavigation } from "../areas/client";
import type { AppRouteKey } from "../types";

export const isRouteActive = (path: string, key: AppRouteKey) => {
  if (key in AdminNavigation.paths) {
    return (
      AdminNavigation.paths[key as keyof typeof AdminNavigation.paths] === path
    );
  }
  if (key in ClientNavigation.paths) {
    return (
      ClientNavigation.paths[key as keyof typeof ClientNavigation.paths] ===
      path
    );
  }
  throw new Error(
    `Route key "${key}" not found in Admin or Client navigation URLs.`,
  );
};
