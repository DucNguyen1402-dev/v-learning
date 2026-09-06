import {
  ADD_COURSE_ROUTE_KEY,
  ADD_COURSE_ROUTE_PATH,
  ADD_COURSE_ROUTE_TITLE,
} from "./constants";

export const addCourseRouteConfig = {
  key: {
    ADD_COURSE: ADD_COURSE_ROUTE_KEY,
  },
  title: {
    [ADD_COURSE_ROUTE_KEY]: ADD_COURSE_ROUTE_TITLE,
  },
  path: {
    [ADD_COURSE_ROUTE_KEY]: ADD_COURSE_ROUTE_PATH,
  },
} as const;
