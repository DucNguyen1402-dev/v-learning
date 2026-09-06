export const USER_COURSE_ROUTE_KEY = "ADMIN_USER_COURSE";
export const USER_COURSE_ROUTE_SEGMENT = "enrolled-courses/:taiKhoan";
export const USER_COURSE_ROUTE_TITLE = "Khóa học của người dùng";
export const USER_COURSE_ROUTE_PATH_BUILDER = (taiKhoan: string) =>
  `/admin/users/enrolled-courses/${taiKhoan}`;
