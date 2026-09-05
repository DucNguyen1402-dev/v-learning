import {
  ADMIN_BUILDER_ROUTE_KEYS,
  ADMIN_BUILDER_ROUTE_PATHS,
  ADMIN_BUILDER_ROUTE_TITLES,
  ADMIN_BUILDER_ROUTE_URLS,
  ADMIN_ROUTE_KEYS,
  ADMIN_ROUTE_PATHS,
  ADMIN_ROUTE_TITLES,
  ADMIN_ROUTE_URLS,
} from "./constants";
import { findRouteKey, isRouteActive } from "./utils";
export const AdminNavigation = {
  keys: ADMIN_ROUTE_KEYS,
  paths: ADMIN_ROUTE_PATHS,
  builderPaths: ADMIN_BUILDER_ROUTE_PATHS,
  builderKeys: ADMIN_BUILDER_ROUTE_KEYS,
  urlBuilders: ADMIN_BUILDER_ROUTE_URLS,
  builderTitles: ADMIN_BUILDER_ROUTE_TITLES,
  titles: ADMIN_ROUTE_TITLES,
  urls: ADMIN_ROUTE_URLS,
  findKey: findRouteKey,
  isActive: isRouteActive,
};
