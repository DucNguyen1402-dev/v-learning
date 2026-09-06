import {
  USER_COURSE_ROUTE_KEY,
  USER_COURSE_ROUTE_PATH_BUILDER,
  USER_COURSE_ROUTE_TITLE,
} from "./constants";

export const userCourseRouteConfig = {
  builderKey: {
    USER_COURSE: USER_COURSE_ROUTE_KEY,
  },

  title: {
    [USER_COURSE_ROUTE_KEY]: USER_COURSE_ROUTE_TITLE,
  },
  pathBuilder: {
    [USER_COURSE_ROUTE_KEY]: USER_COURSE_ROUTE_PATH_BUILDER,
  },
} as const;
