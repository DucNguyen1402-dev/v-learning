import {
  ADMIN_ROUTE_BUILDER_KEYS,
  ADMIN_ROUTE_BUILDER_PATHS,
  ADMIN_ROUTE_BUILDER_TITLES,
  ADMIN_ROUTE_KEYS,
  ADMIN_ROUTE_PATHS,
  ADMIN_ROUTE_TITLES,
} from "./constant";
import { findRouteKey, isRouteActive } from "./utils";
export const AdminNavigation = {
  keys: ADMIN_ROUTE_KEYS,
  titles: ADMIN_ROUTE_TITLES,
  paths: ADMIN_ROUTE_PATHS,

  builderKeys: ADMIN_ROUTE_BUILDER_KEYS,
  builderTitles: ADMIN_ROUTE_BUILDER_TITLES,
  pathBuilders: ADMIN_ROUTE_BUILDER_PATHS,

  findKey: findRouteKey,
  isActive: isRouteActive,
};
