import {
  PERSONAL_COURSES_ROUTE_KEY,
  PERSONAL_COURSES_ROUTE_PATH,
  PERSONAL_COURSES_ROUTE_TITLE,
} from "./constants";

export const personalCoursesRouteConfig = {
  key: {
    PERSONAL_COURSES: PERSONAL_COURSES_ROUTE_KEY,
  },

  title: {
    [PERSONAL_COURSES_ROUTE_KEY]: PERSONAL_COURSES_ROUTE_TITLE,
  },
  path: {
    [PERSONAL_COURSES_ROUTE_KEY]: PERSONAL_COURSES_ROUTE_PATH,
  },
} as const;
