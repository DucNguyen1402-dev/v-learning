import {
  CLIENT_ROUTE_KEYS,
  CLIENT_ROUTE_PATHS,
  CLIENT_ROUTE_URLS,
  findRouteKey,
  isRouteActive,
} from "./client";

export const AppRoutes = {
  client: {
    keys: CLIENT_ROUTE_KEYS,
    paths: CLIENT_ROUTE_PATHS,
    urls: CLIENT_ROUTE_URLS,
    findKey: findRouteKey,
    isActive: isRouteActive,
  },
};
