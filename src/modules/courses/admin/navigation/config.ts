import {
  COURSES_ROUTE_KEY,
  COURSES_ROUTE_PATH,
  COURSES_ROUTE_TITLE,
} from "./constants";

export const coursesRouteConfig = {
  key: {
    COURSES: COURSES_ROUTE_KEY,
  },
  path: {
    [COURSES_ROUTE_KEY]: COURSES_ROUTE_PATH,
  },
  title: {
    [COURSES_ROUTE_KEY]: COURSES_ROUTE_TITLE,
  },
} as const;
