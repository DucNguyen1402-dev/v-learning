import {
  SUPPORT_ROUTE_KEY,
  SUPPORT_ROUTE_PATH,
  SUPPORT_ROUTE_TITLE,
} from "./constants";

export const supportRouteConfig = {
  key: {
    SUPPORT: SUPPORT_ROUTE_KEY,
  },
  title: {
    [SUPPORT_ROUTE_KEY]: SUPPORT_ROUTE_TITLE,
  },
  path: {
    [SUPPORT_ROUTE_KEY]: SUPPORT_ROUTE_PATH,
  },
} as const;
