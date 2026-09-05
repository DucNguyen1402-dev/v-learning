import {
  CLIENT_ROUTE_BUILDER_KEYS,
  CLIENT_ROUTE_BUILDER_PATHS,
  CLIENT_ROUTE_BUILDER_TITLES,
  CLIENT_ROUTE_KEYS,
  CLIENT_ROUTE_PATHS,
  CLIENT_ROUTE_TITLES,
} from "./constant";
import { findRouteKey, isRouteActive } from "./utils";

export const ClientNavigation = {
  keys: CLIENT_ROUTE_KEYS,
  titles: CLIENT_ROUTE_TITLES,
  paths: CLIENT_ROUTE_PATHS,

  builderKeys: CLIENT_ROUTE_BUILDER_KEYS,
  builderTitles: CLIENT_ROUTE_BUILDER_TITLES,
  pathBuilders: CLIENT_ROUTE_BUILDER_PATHS,
  findKey: findRouteKey,
  isActive: isRouteActive,
};
