import {
  CLIENT_ROUTE_BUILDER_KEYS,
  CLIENT_ROUTE_BUILDER_PATHS,
  CLIENT_ROUTE_BUILDER_TITLES,
  CLIENT_ROUTE_KEYS,
  CLIENT_ROUTE_PATHS,
  CLIENT_ROUTE_TITLES,
} from "./constants";
import { findRouteKey, isRouteActive } from "./utils";

export const ClientNavigation = {
  keys: CLIENT_ROUTE_KEYS,
  builderKeys: CLIENT_ROUTE_BUILDER_KEYS,
  paths: CLIENT_ROUTE_PATHS,
  titles: CLIENT_ROUTE_TITLES,
  pathBuilders: CLIENT_ROUTE_BUILDER_PATHS,
  builderTitles: CLIENT_ROUTE_BUILDER_TITLES,
  findKey: findRouteKey,
  isActive: isRouteActive,
};
