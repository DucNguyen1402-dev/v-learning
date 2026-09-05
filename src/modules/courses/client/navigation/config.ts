import {
  COURSES_ROUTE_KEY,
  COURSES_ROUTE_PATH,
  COURSES_ROUTE_TITLE,
} from "./constants";

export const coursesRouteConfig = {
  key: {
    COURSES: COURSES_ROUTE_KEY,
  },
  title: {
    [COURSES_ROUTE_KEY]: COURSES_ROUTE_TITLE,
  },
  path: {
    [COURSES_ROUTE_KEY]: COURSES_ROUTE_PATH,
  },
} as const;
