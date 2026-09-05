import {
  REGISTER_ROUTE_KEY,
  REGISTER_ROUTE_PATH,
  REGISTER_ROUTE_TITLE,
} from "./constants";

export const registerRouteConfig = {
  key: {
    REGISTER: REGISTER_ROUTE_KEY,
  },

  title: {
    [REGISTER_ROUTE_KEY]: REGISTER_ROUTE_TITLE,
  },
  path: {
    [REGISTER_ROUTE_KEY]: REGISTER_ROUTE_PATH,
  },
} as const;
