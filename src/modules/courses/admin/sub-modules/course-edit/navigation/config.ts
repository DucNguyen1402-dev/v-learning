import {
  EDIT_COURSE_ROUTE_KEY,
  EDIT_COURSE_ROUTE_PATH_BUILDER,
  EDIT_COURSE_ROUTE_TITLE,
} from "./constants";

export const editCourseBuilderRouteConfig = {
  builderKey: {
    EDIT_COURSE: EDIT_COURSE_ROUTE_KEY,
  },
  title: {
    [EDIT_COURSE_ROUTE_KEY]: EDIT_COURSE_ROUTE_TITLE,
  },
  pathBuilder: {
    [EDIT_COURSE_ROUTE_KEY]: EDIT_COURSE_ROUTE_PATH_BUILDER,
  },
} as const;
