import {
  LOGIN_ROUTE_KEY,
  LOGIN_ROUTE_PATH,
  LOGIN_ROUTE_TITLE,
} from "./constants";

export const loginRouteConfig = {
  key: {
    LOGIN: LOGIN_ROUTE_KEY,
  },

  title: {
    [LOGIN_ROUTE_KEY]: LOGIN_ROUTE_TITLE,
  },
  path: {
    [LOGIN_ROUTE_KEY]: LOGIN_ROUTE_PATH,
  },
} as const;
