import {
  addCourseRouteConfig,
  coursesRouteConfig,
  editCourseBuilderRouteConfig,
} from "@modules/courses/admin";
export const ADMIN_ROUTE_KEYS = {
  ...coursesRouteConfig.key,
  ...addCourseRouteConfig.key,
  PROFILE: "ADMIN_PROFILE",
  PROFILE_CHANGE: "ADMIN_PROFILE_CHANGE",
  PASSWORD_CHANGE: "ADMIN_PROFILE_PASSWORD_CHANGE",
  USER: "ADMIN_USER",
  USER_ADD: "ADMIN_USER_ADD",
} as const;

export type AdminRouteKey =
  (typeof ADMIN_ROUTE_KEYS)[keyof typeof ADMIN_ROUTE_KEYS];

export const adminRouteKeys = Object.values(
  ADMIN_ROUTE_KEYS,
) as AdminRouteKey[];

// export const ADMIN_ROUTE_PATHS = {
//   [ADMIN_ROUTE_KEYS.COURSES]: "courses",
//   [ADMIN_ROUTE_KEYS.COURSES_ADD]: "add",
//   [ADMIN_ROUTE_KEYS.PROFILE]: "profile",
//   [ADMIN_ROUTE_KEYS.USER]: "users",
//   [ADMIN_ROUTE_KEYS.USER_ADD]: "add",
//   [ADMIN_ROUTE_KEYS.PROFILE_CHANGE]: "profile/change",
//   [ADMIN_ROUTE_KEYS.PASSWORD_CHANGE]: "profile/password-change",
// } as const;

export const ADMIN_ROUTE_TITLES = {
  ...coursesRouteConfig.title,
  ...addCourseRouteConfig.title,
  [ADMIN_ROUTE_KEYS.PROFILE]: "Profile",
  [ADMIN_ROUTE_KEYS.USER]: "Users Management",
  [ADMIN_ROUTE_KEYS.USER_ADD]: "Add User",
  [ADMIN_ROUTE_KEYS.PROFILE_CHANGE]: "Change Profile",
  [ADMIN_ROUTE_KEYS.PASSWORD_CHANGE]: "Change Password",
} as const;

export const ADMIN_ROUTE_PATHS = {
  ...coursesRouteConfig.path,
  ...addCourseRouteConfig.path,
  [ADMIN_ROUTE_KEYS.COURSES_ADD]: "/admin/courses/add",
  [ADMIN_ROUTE_KEYS.PROFILE]: "/admin/profile",
  [ADMIN_ROUTE_KEYS.USER]: "/admin/users",
  [ADMIN_ROUTE_KEYS.USER_ADD]: "/admin/users/add",
  [ADMIN_ROUTE_KEYS.PROFILE_CHANGE]: "/admin/profile/change",
  [ADMIN_ROUTE_KEYS.PASSWORD_CHANGE]: "/admin/profile/password-change",
} as const;

/*======================================================================================== builder route keys */
export const ADMIN_BUILDER_ROUTE_KEYS = {
  ...editCourseBuilderRouteConfig.builderKey,
  USER_EDIT: "ADMIN_USER_EDIT",
  USER_COURSES: "ADMIN_USER_COURSES",
  COURSE_ENROLLMENT: "ADMIN_COURSE_ENROLLMENT",
  ENROLL_USER: "ADMIN_ENROLL_USER",
} as const;

export type AdminRouteBuilderKey =
  (typeof ADMIN_BUILDER_ROUTE_KEYS)[keyof typeof ADMIN_BUILDER_ROUTE_KEYS];

export const adminRouteBuilderKeys = Object.values(
  ADMIN_BUILDER_ROUTE_KEYS,
) as AdminRouteBuilderKey[];

// export const ADMIN_BUILDER_ROUTE_PATHS = {
//   [ADMIN_BUILDER_ROUTE_KEYS.COURSE_EDIT]: "edit/:maKhoaHoc",
//   [ADMIN_BUILDER_ROUTE_KEYS.USER_EDIT]: "edit/:taiKhoan",
//   [ADMIN_BUILDER_ROUTE_KEYS.USER_COURSES]: "enrolled-courses/:taiKhoan",
//   [ADMIN_BUILDER_ROUTE_KEYS.COURSE_ENROLLMENT]: ":maKhoaHoc/enrollment",
//   [ADMIN_BUILDER_ROUTE_KEYS.ENROLL_USER]: ":maKhoaHoc/enroll-user",
// } as const;

export const ADMIN_BUILDER_ROUTE_TITLES = {
  ...editCourseBuilderRouteConfig.title,
  [ADMIN_BUILDER_ROUTE_KEYS.USER_EDIT]: "Edit User",
  [ADMIN_BUILDER_ROUTE_KEYS.USER_COURSES]: "User Enrolled Courses",
  [ADMIN_BUILDER_ROUTE_KEYS.COURSE_ENROLLMENT]: "Course Enrollment",
  [ADMIN_BUILDER_ROUTE_KEYS.ENROLL_USER]: "Enroll User",
} as const;

export const ADMIN_BUILDER_ROUTE_PATHS = {
  ...editCourseBuilderRouteConfig.pathBuilder,
  [ADMIN_BUILDER_ROUTE_KEYS.USER_EDIT]: (taiKhoan: string) =>
    `/admin/users/edit/${taiKhoan}`,
  [ADMIN_BUILDER_ROUTE_KEYS.USER_COURSES]: (taiKhoan: string) =>
    `/admin/users/enrolled-courses/${taiKhoan}`,
  [ADMIN_BUILDER_ROUTE_KEYS.COURSE_ENROLLMENT]: (maKhoaHoc: string) =>
    `/admin/courses/${maKhoaHoc}/enrollment`,
  [ADMIN_BUILDER_ROUTE_KEYS.ENROLL_USER]: (maKhoaHoc: string) =>
    `/admin/courses/${maKhoaHoc}/enroll-user`,
} as const;
