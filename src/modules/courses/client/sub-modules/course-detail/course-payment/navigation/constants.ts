export const COURSES_PAYMENT_BUILDER_KEY = "CLIENT_COURSES_PAYMENT";

export const COURSES_PAYMENT_BUILDER_SEGMENT = "payment";

export const COURSES_PAYMENT_BUILDER_TITLE = "Thanh toán khóa học";

export const COURSES_PAYMENT_PATH_BUILDER = (maKhoaHoc: string) =>
  `/client/courses/${maKhoaHoc}/${COURSES_PAYMENT_BUILDER_SEGMENT}`;
