export const COURSES_BY_CATEGORY_BUILDER_KEY = "CLIENT_COURSES_BY_CATEGORY";

export const COURSES_BY_CATEGORY_BUILDER_PATH = "category/:maDanhMuc";

export const COURSES_BY_CATEGORY_BUILDER_TITLE = "Courses By Category";

export const COURSES_BY_CATEGORY_URL_BUILDER = (maDanhMuc: string) =>
  `/client/courses/category/${maDanhMuc}`;
