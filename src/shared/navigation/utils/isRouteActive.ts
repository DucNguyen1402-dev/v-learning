import {
  AdminNavigation,
  type AdminRouteKey,
  ClientNavigation,
  type ClientRouteKey,
} from "../areas";
import type { AppRouteKey } from "../types";

export const isRouteActive = (path: string, key: AppRouteKey) => {
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
