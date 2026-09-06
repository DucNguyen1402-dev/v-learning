import { USER_ROUTE_KEY, USER_ROUTE_PATH, USER_ROUTE_TITLE } from "./constants";

export const userRouteConfig = {
  key: {
    USER: USER_ROUTE_KEY,
  },

  title: {
    [USER_ROUTE_KEY]: USER_ROUTE_TITLE,
  },
  path: {
    [USER_ROUTE_KEY]: USER_ROUTE_PATH,
  },
} as const;
