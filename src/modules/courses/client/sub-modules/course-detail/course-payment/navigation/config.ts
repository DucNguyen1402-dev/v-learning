import {
  COURSES_PAYMENT_BUILDER_KEY,
  COURSES_PAYMENT_BUILDER_TITLE,
  COURSES_PAYMENT_PATH_BUILDER,
} from "./constants";

export const coursesPaymentBuilderRouteConfig = {
  builderKey: {
    COURSES_DETAIL_PAYMENT: COURSES_PAYMENT_BUILDER_KEY,
  },

  title: {
    [COURSES_PAYMENT_BUILDER_KEY]: COURSES_PAYMENT_BUILDER_TITLE,
  },
  pathBuilder: {
    [COURSES_PAYMENT_BUILDER_KEY]: COURSES_PAYMENT_PATH_BUILDER,
  },
} as const;
