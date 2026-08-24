import {
  CLIENT_ROUTE_BUILDERS,
  CLIENT_ROUTE_BUILDERS_KEYS,
  CLIENT_ROUTE_BUILDERS_PATHS,
  CLIENT_ROUTE_BUILDERS_TITLES,
  CLIENT_ROUTE_KEYS,
  CLIENT_ROUTE_PATHS,
  CLIENT_ROUTE_TITLES,
  CLIENT_ROUTE_URLS,
} from "./constants";
import { findRouteKey, isRouteActive } from "./utils";

export const ClientNavigation = {
  keys: CLIENT_ROUTE_KEYS,
  buildersKeys: CLIENT_ROUTE_BUILDERS_KEYS,
  paths: CLIENT_ROUTE_PATHS,
  urls: CLIENT_ROUTE_URLS,
  titles: CLIENT_ROUTE_TITLES,
  builders: CLIENT_ROUTE_BUILDERS,
  buildersPaths: CLIENT_ROUTE_BUILDERS_PATHS,
  buildersTitles: CLIENT_ROUTE_BUILDERS_TITLES,
  findKey: findRouteKey,
  isActive: isRouteActive,
};
