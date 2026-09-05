import {
  COURSES_PLAYER_BUILDER_KEY,
  COURSES_PLAYER_BUILDER_TITLE,
  COURSES_PLAYER_PATH_BUILDER,
} from "./constants";

export const coursesPlayerRouteConfig = {
  key: {
    PERSONAL_COURSE_DETAIL_PLAYER: COURSES_PLAYER_BUILDER_KEY,
  },

  title: {
    [COURSES_PLAYER_BUILDER_KEY]: COURSES_PLAYER_BUILDER_TITLE,
  },
  pathBuilder: {
    [COURSES_PLAYER_BUILDER_KEY]: COURSES_PLAYER_PATH_BUILDER,
  },
} as const;
