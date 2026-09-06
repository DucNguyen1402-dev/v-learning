import {
  ENROLL_USER_ROUTE_KEY,
  ENROLL_USER_ROUTE_PATH_BUILDER,
  ENROLL_USER_ROUTE_TITLE,
} from "./constants";

export const enrollUserRouteConfig = {
  builderKey: {
    ENROLL_USER: ENROLL_USER_ROUTE_KEY,
  },
  title: {
    [ENROLL_USER_ROUTE_KEY]: ENROLL_USER_ROUTE_TITLE,
  },
  pathBuilder: {
    [ENROLL_USER_ROUTE_KEY]: ENROLL_USER_ROUTE_PATH_BUILDER,
  },
} as const;
