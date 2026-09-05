import {
  PROFILE_ROUTE_KEY,
  PROFILE_ROUTE_PATH,
  PROFILE_ROUTE_TITLE,
} from "./constants";

export const profileRouteConfig = {
  key: {
    PROFILE: PROFILE_ROUTE_KEY,
  },
  title: {
    [PROFILE_ROUTE_KEY]: PROFILE_ROUTE_TITLE,
  },
  path: {
    [PROFILE_ROUTE_KEY]: PROFILE_ROUTE_PATH,
  },
} as const;
