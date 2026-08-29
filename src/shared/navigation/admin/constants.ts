export const ADMIN_ROUTE_KEYS = {
  COURSES: "COURSES",
  COURSES_ADD: "COURSES_ADD",
  PROFILE: "PROFILE",
} as const;

export const ADMIN_ROUTE_BUILDERS_KEYS = {
  COURSE_EDIT: "COURSE_EDIT",
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
} as const;

export const ADMIN_ROUTE_BUILDERS_PATHS = {
  [ADMIN_ROUTE_BUILDERS_KEYS.COURSE_EDIT]: "edit/:maKhoaHoc",
} as const;

export const ADMIN_ROUTE_TITLES = {
  [ADMIN_ROUTE_KEYS.COURSES]: "Courses",
  [ADMIN_ROUTE_KEYS.COURSES_ADD]: "Add Course",
  [ADMIN_ROUTE_KEYS.PROFILE]: "Profile",
} as const;

export const ADMIN_ROUTE_BUILDERS_TITLES = {
  [ADMIN_ROUTE_BUILDERS_KEYS.COURSE_EDIT]: "Edit Course",
} as const;

export const ADMIN_ROUTE_URLS = {
  [ADMIN_ROUTE_KEYS.COURSES]: "/admin/courses",
  [ADMIN_ROUTE_KEYS.COURSES_ADD]: "/admin/courses/add",
  [ADMIN_ROUTE_KEYS.PROFILE]: "/admin/profile",
} as const;

export const ADMIN_ROUTE_BUILDERS = {
  [ADMIN_ROUTE_BUILDERS_KEYS.COURSE_EDIT]: (maKhoaHoc: string) =>
    `/admin/courses/edit/${maKhoaHoc}`,
} as const;
