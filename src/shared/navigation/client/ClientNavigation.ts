import {
  CLIENT_ROUTE_BUILDER_KEYS,
  CLIENT_ROUTE_BUILDER_PATHS,
  CLIENT_ROUTE_BUILDER_TITLES,
  CLIENT_ROUTE_BUILDERS,
  CLIENT_ROUTE_KEYS,
  CLIENT_ROUTE_PATHS,
  CLIENT_ROUTE_TITLES,
  CLIENT_ROUTE_URLS,
} from "./constants";
import { findRouteKey, isRouteActive } from "./utils";

export const ClientNavigation = {
  keys: CLIENT_ROUTE_KEYS,
  builderKeys: CLIENT_ROUTE_BUILDER_KEYS,
  paths: CLIENT_ROUTE_PATHS,
  urls: CLIENT_ROUTE_URLS,
  titles: CLIENT_ROUTE_TITLES,
  builders: CLIENT_ROUTE_BUILDERS,
  builderPaths: CLIENT_ROUTE_BUILDER_PATHS,
  builderTitles: CLIENT_ROUTE_BUILDER_TITLES,
  findKey: findRouteKey,
  isActive: isRouteActive,
};
