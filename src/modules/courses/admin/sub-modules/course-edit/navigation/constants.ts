export const EDIT_COURSE_ROUTE_KEY = "EDIT_COURSE";
export const EDIT_COURSE_ROUTE_SEGMENT = "edit/:maKhoaHoc";
export const EDIT_COURSE_ROUTE_TITLE = "chỉnh sửa khóa học";
export const EDIT_COURSE_ROUTE_PATH_BUILDER = (maKhoaHoc: string) =>
  `/admin/courses/edit/${maKhoaHoc}`;
