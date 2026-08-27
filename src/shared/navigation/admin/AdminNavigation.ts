import {
  ADMIN_ROUTE_BUILDERS,
  ADMIN_ROUTE_BUILDERS_KEYS,
  ADMIN_ROUTE_BUILDERS_PATHS,
  ADMIN_ROUTE_BUILDERS_TITLES,
  ADMIN_ROUTE_KEYS,
  ADMIN_ROUTE_PATHS,
  ADMIN_ROUTE_TITLES,
  ADMIN_ROUTE_URLS,
} from "./constants";
import { findRouteKey, isRouteActive } from "./utils";
export const AdminNavigation = {
  keys: ADMIN_ROUTE_KEYS,
  paths: ADMIN_ROUTE_PATHS,
  buildersPaths: ADMIN_ROUTE_BUILDERS_PATHS,
  buildersKeys: ADMIN_ROUTE_BUILDERS_KEYS,
  builders: ADMIN_ROUTE_BUILDERS,
  builderTitles: ADMIN_ROUTE_BUILDERS_TITLES,
  titles: ADMIN_ROUTE_TITLES,
  urls: ADMIN_ROUTE_URLS,
  findKey: findRouteKey,
  isActive: isRouteActive,
};
