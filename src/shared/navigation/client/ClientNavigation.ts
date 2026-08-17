import {
  CLIENT_ROUTE_KEYS,
  CLIENT_ROUTE_PATHS,
  CLIENT_ROUTE_TITLES,
  CLIENT_ROUTE_URLS,
} from "./constants";
import { findRouteKey, isRouteActive } from "./utils";

export const ClientNavigation = {
  keys: CLIENT_ROUTE_KEYS,
  paths: CLIENT_ROUTE_PATHS,
  urls: CLIENT_ROUTE_URLS,
  titles: CLIENT_ROUTE_TITLES,
  findKey: findRouteKey,
  isActive: isRouteActive,
};
