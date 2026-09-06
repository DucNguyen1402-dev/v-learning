import {
  ABOUT_ROUTE_KEY,
  ABOUT_ROUTE_PATH,
  ABOUT_ROUTE_TITLE,
} from "./constants";

export const aboutRouteConfig = {
  key: {
    ABOUT: ABOUT_ROUTE_KEY,
  },
  title: {
    [ABOUT_ROUTE_KEY]: ABOUT_ROUTE_TITLE,
  },
  path: {
    [ABOUT_ROUTE_KEY]: ABOUT_ROUTE_PATH,
  },
} as const;
