import {
  ADMIN_ROUTE_BUILDER_KEYS,
  ADMIN_ROUTE_BUILDER_PATHS,
  ADMIN_ROUTE_BUILDER_TITLES,
  ADMIN_ROUTE_BUILDERS,
  ADMIN_ROUTE_KEYS,
  ADMIN_ROUTE_PATHS,
  ADMIN_ROUTE_TITLES,
  ADMIN_ROUTE_URLS,
} from "./constants";
import { findRouteKey, isRouteActive } from "./utils";
export const AdminNavigation = {
  keys: ADMIN_ROUTE_KEYS,
  paths: ADMIN_ROUTE_PATHS,
  builderPaths: ADMIN_ROUTE_BUILDER_PATHS,
  builderKeys: ADMIN_ROUTE_BUILDER_KEYS,
  builders: ADMIN_ROUTE_BUILDERS,
  builderTitles: ADMIN_ROUTE_BUILDER_TITLES,
  titles: ADMIN_ROUTE_TITLES,
  urls: ADMIN_ROUTE_URLS,
  findKey: findRouteKey,
  isActive: isRouteActive,
};
