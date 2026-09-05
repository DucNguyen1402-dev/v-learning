import {
  COURSES_DETAIL_BUILDER_KEY,
  COURSES_DETAIL_BUILDER_TITLE,
  COURSES_DETAIL_URL_BUILDER,
} from "./constants";

export const coursesDetailBuilderRouteConfig = {
  key: {
    COURSES_DETAIL: COURSES_DETAIL_BUILDER_KEY,
  },

  title: {
    [COURSES_DETAIL_BUILDER_KEY]: COURSES_DETAIL_BUILDER_TITLE,
  },
  urlBuilder: {
    [COURSES_DETAIL_BUILDER_KEY]: COURSES_DETAIL_URL_BUILDER,
  },
};
