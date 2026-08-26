export const CLIENT_ROUTE_KEYS = {
  HOME: "HOME",
  LOGIN: "LOGIN",
  ABOUT: "ABOUT",
  REGISTER: "REGISTER",
  BLOGS: "BLOGS",
  PROFILE: "PROFILE",
  PROFILE_CHANGE: "PROFILE_CHANGE",
  PROFILE_PASSWORD_CHANGE: "PROFILE_PASSWORD_CHANGE",
  PERSONAL_COURSE: "PERSONAL_COURSE",
  COURSES: "COURSES",
} as const;

export const clientRouteKeys = Object.values(
  CLIENT_ROUTE_KEYS,
) as ClientRouteKey[];
export const CLIENT_ROUTE_BUILDERS_KEYS = {
  COURSES_DETAIL: "COURSES_DETAIL",
  COURSES_DETAIL_PAYMENT: "COURSES_DETAIL_PAYMENT",
  PERSONAL_COURSE_DETAIL: "PERSONAL_COURSE_DETAIL",
  PERSONAL_COURSE_DETAIL_PLAYER: "PERSONAL_COURSE_DETAIL_PLAYER",
} as const;

export type ClientRouteKey = keyof typeof CLIENT_ROUTE_KEYS;
export type ClientRouteBuilderKey = keyof typeof CLIENT_ROUTE_BUILDERS_KEYS;

export const CLIENT_ROUTE_PATHS = {
  [CLIENT_ROUTE_KEYS.HOME]: "home",
  [CLIENT_ROUTE_KEYS.LOGIN]: "login",
  [CLIENT_ROUTE_KEYS.ABOUT]: "about",
  [CLIENT_ROUTE_KEYS.REGISTER]: "register",
  [CLIENT_ROUTE_KEYS.BLOGS]: "blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "profile",
  [CLIENT_ROUTE_KEYS.PROFILE_CHANGE]: "profile-change",
  [CLIENT_ROUTE_KEYS.PROFILE_PASSWORD_CHANGE]: "password-change",
  [CLIENT_ROUTE_KEYS.PERSONAL_COURSE]: "personal-courses",
  [CLIENT_ROUTE_KEYS.COURSES]: "courses",
} as const;

export const CLIENT_ROUTE_BUILDERS_PATHS = {
  [CLIENT_ROUTE_BUILDERS_KEYS.COURSES_DETAIL]: ":maKhoaHoc",
  [CLIENT_ROUTE_BUILDERS_KEYS.COURSES_DETAIL_PAYMENT]: "payment",
  [CLIENT_ROUTE_BUILDERS_KEYS.PERSONAL_COURSE_DETAIL]: ":maKhoaHoc",
  [CLIENT_ROUTE_BUILDERS_KEYS.PERSONAL_COURSE_DETAIL_PLAYER]: "player",
} as const;

export const CLIENT_ROUTE_TITLES = {
  [CLIENT_ROUTE_KEYS.HOME]: "Home",
  [CLIENT_ROUTE_KEYS.LOGIN]: "Login",
  [CLIENT_ROUTE_KEYS.ABOUT]: "About",
  [CLIENT_ROUTE_KEYS.REGISTER]: "Register",
  [CLIENT_ROUTE_KEYS.BLOGS]: "Blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "Profile",
  [CLIENT_ROUTE_KEYS.PROFILE_CHANGE]: "Profile Change",
  [CLIENT_ROUTE_KEYS.PROFILE_PASSWORD_CHANGE]: "Password Change",
  [CLIENT_ROUTE_KEYS.PERSONAL_COURSE]: "Personal Courses",
  [CLIENT_ROUTE_KEYS.COURSES]: "Courses",
} as const;

export const CLIENT_ROUTE_BUILDERS_TITLES = {
  [CLIENT_ROUTE_BUILDERS_KEYS.COURSES_DETAIL]: "Course Detail",
  [CLIENT_ROUTE_BUILDERS_KEYS.COURSES_DETAIL_PAYMENT]: "Course Payment",
  [CLIENT_ROUTE_BUILDERS_KEYS.PERSONAL_COURSE_DETAIL]: "Personal Course Detail",
  [CLIENT_ROUTE_BUILDERS_KEYS.PERSONAL_COURSE_DETAIL_PLAYER]:
    "Personal Course Player",
} as const;

export const CLIENT_ROUTE_URLS = {
  [CLIENT_ROUTE_KEYS.HOME]: "/client/home",
  [CLIENT_ROUTE_KEYS.LOGIN]: "/client/login",
  [CLIENT_ROUTE_KEYS.ABOUT]: "/client/about",
  [CLIENT_ROUTE_KEYS.REGISTER]: "/client/register",
  [CLIENT_ROUTE_KEYS.BLOGS]: "/client/blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "/client/profile",
  [CLIENT_ROUTE_KEYS.PROFILE_CHANGE]: "/client/profile/change",
  [CLIENT_ROUTE_KEYS.PROFILE_PASSWORD_CHANGE]:
    "/client/profile/password-change",
  [CLIENT_ROUTE_KEYS.PERSONAL_COURSE]: "/client/personal-courses",
  [CLIENT_ROUTE_KEYS.COURSES]: "/client/courses",
} as const;

export const CLIENT_ROUTE_BUILDERS = {
  [CLIENT_ROUTE_BUILDERS_KEYS.COURSES_DETAIL]: (maKhoaHoc: string) =>
    `/client/courses/${maKhoaHoc}`,
  [CLIENT_ROUTE_BUILDERS_KEYS.COURSES_DETAIL_PAYMENT]: (maKhoaHoc: string) =>
    `/client/courses/${maKhoaHoc}/payment`,
  [CLIENT_ROUTE_BUILDERS_KEYS.PERSONAL_COURSE_DETAIL]: (maKhoaHoc: string) =>
    `/client/personal-courses/${maKhoaHoc}`,
  [CLIENT_ROUTE_BUILDERS_KEYS.PERSONAL_COURSE_DETAIL_PLAYER]: (
    maKhoaHoc: string,
  ) => `/client/personal-courses/${maKhoaHoc}/player`,
} as const;
