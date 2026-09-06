export const COURSES_BY_CATEGORY_BUILDER_KEY = "CLIENT_COURSES_BY_CATEGORY";

export const COURSES_BY_CATEGORY_BUILDER_SEGMENT = "category/:maDanhMuc";

export const COURSES_BY_CATEGORY_BUILDER_TITLE = "Khóa học theo danh mục";

export const COURSES_BY_CATEGORY_PATH_BUILDER = (maDanhMuc: string) =>
  `/client/courses/category/${maDanhMuc}`;
