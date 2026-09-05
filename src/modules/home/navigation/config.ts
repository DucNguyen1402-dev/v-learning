import { HOME_ROUTE_KEY, HOME_ROUTE_PATH, HOME_ROUTE_TITLE } from "./constants";

export const homeRouteConfig = {
  key: {
    HOME: HOME_ROUTE_KEY,
  },
  title: {
    [HOME_ROUTE_KEY]: HOME_ROUTE_TITLE,
  },
  path: {
    [HOME_ROUTE_KEY]: HOME_ROUTE_PATH,
  },
} as const;
