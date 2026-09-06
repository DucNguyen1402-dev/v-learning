import {
  ADD_USER_ROUTE_KEY,
  ADD_USER_ROUTE_PATH,
  ADD_USER_ROUTE_TITLE,
} from "./constants";

export const addUserRouteConfig = {
  key: {
    ADD_USER: ADD_USER_ROUTE_KEY,
  },

  title: {
    [ADD_USER_ROUTE_KEY]: ADD_USER_ROUTE_TITLE,
  },
  path: {
    [ADD_USER_ROUTE_KEY]: ADD_USER_ROUTE_PATH,
  },
} as const;
