export const ADMIN_ROUTE_KEYS = {
  COURSES: "COURSES",
  COURSES_ADD: "COURSES_ADD",
  PROFILE: "PROFILE",
  USER: "USER",
  USER_ADD: "USER_ADD",
} as const;

export const ADMIN_ROUTE_BUILDERS_KEYS = {
  COURSE_EDIT: "COURSE_EDIT",
  USER_EDIT: "USER_EDIT",
  USER_ENROLLED_COURSES: "USER_ENROLLED_COURSES",
} as const;

export type AdminRouteKey = keyof typeof ADMIN_ROUTE_KEYS;
export type AdminRouteBuilderKey = keyof typeof ADMIN_ROUTE_BUILDERS_KEYS;

export const adminRouteKeys = Object.values(
  ADMIN_ROUTE_KEYS,
) as AdminRouteKey[];

export const adminRouteBuilderKeys = Object.values(
  ADMIN_ROUTE_BUILDERS_KEYS,
) as AdminRouteBuilderKey[];

export const ADMIN_ROUTE_PATHS = {
  [ADMIN_ROUTE_KEYS.COURSES]: "courses",
  [ADMIN_ROUTE_KEYS.COURSES_ADD]: "add",
  [ADMIN_ROUTE_KEYS.PROFILE]: "profile",
  [ADMIN_ROUTE_KEYS.USER]: "users",
  [ADMIN_ROUTE_KEYS.USER_ADD]: "add",
} as const;

export const ADMIN_ROUTE_BUILDERS_PATHS = {
  [ADMIN_ROUTE_BUILDERS_KEYS.COURSE_EDIT]: "edit/:maKhoaHoc",
  [ADMIN_ROUTE_BUILDERS_KEYS.USER_EDIT]: "edit/:taiKhoan",
  [ADMIN_ROUTE_BUILDERS_KEYS.USER_ENROLLED_COURSES]:
    "enrolled-courses/:taiKhoan",
} as const;

export const ADMIN_ROUTE_TITLES = {
  [ADMIN_ROUTE_KEYS.COURSES]: "Courses",
  [ADMIN_ROUTE_KEYS.COURSES_ADD]: "Add Course",
  [ADMIN_ROUTE_KEYS.PROFILE]: "Profile",
  [ADMIN_ROUTE_KEYS.USER]: "Users Management",
  [ADMIN_ROUTE_KEYS.USER_ADD]: "Add User",
} as const;

export const ADMIN_ROUTE_BUILDERS_TITLES = {
  [ADMIN_ROUTE_BUILDERS_KEYS.COURSE_EDIT]: "Edit Course",
  [ADMIN_ROUTE_BUILDERS_KEYS.USER_EDIT]: "Edit User",
  [ADMIN_ROUTE_BUILDERS_KEYS.USER_ENROLLED_COURSES]: "User Enrolled Courses",
} as const;

export const ADMIN_ROUTE_URLS = {
  [ADMIN_ROUTE_KEYS.COURSES]: "/admin/courses",
  [ADMIN_ROUTE_KEYS.COURSES_ADD]: "/admin/courses/add",
  [ADMIN_ROUTE_KEYS.PROFILE]: "/admin/profile",
  [ADMIN_ROUTE_KEYS.USER]: "/admin/users",
  [ADMIN_ROUTE_KEYS.USER_ADD]: "/admin/users/add",
} as const;

export const ADMIN_ROUTE_BUILDERS = {
  [ADMIN_ROUTE_BUILDERS_KEYS.COURSE_EDIT]: (maKhoaHoc: string) =>
    `/admin/courses/edit/${maKhoaHoc}`,
  [ADMIN_ROUTE_BUILDERS_KEYS.USER_EDIT]: (taiKhoan: string) =>
    `/admin/users/edit/${taiKhoan}`,
  [ADMIN_ROUTE_BUILDERS_KEYS.USER_ENROLLED_COURSES]: (taiKhoan: string) =>
    `/admin/users/enrolled-courses/${taiKhoan}`,
} as const;
