export const CLIENT_ROUTE_KEYS = {
  HOME: "HOME",
  LOGIN: "LOGIN",
  ABOUT: "ABOUT",
  REGISTER: "REGISTER",
  PASSWORD_RESET: "PASSWORD_RESET",
  BLOGS: "BLOGS",
  PROFILE: "PROFILE",
  COURSES: "COURSES",
} as const;

export type ClientRouteKey = keyof typeof CLIENT_ROUTE_KEYS;

export const CLIENT_ROUTE_PATHS = {
  HOME: "home",
  LOGIN: "login",
  ABOUT: "about",
  REGISTER: "register",
  PASSWORD_RESET: "password-reset",
  BLOGS: "blogs",
  PROFILE: "profile",
  COURSES: "courses",
} as const;

export const CLIENT_ROUTE_URLS = {
  [CLIENT_ROUTE_KEYS.HOME]: "/client/home",
  [CLIENT_ROUTE_KEYS.LOGIN]: "/client/login",
  [CLIENT_ROUTE_KEYS.ABOUT]: "/client/about",
  [CLIENT_ROUTE_KEYS.REGISTER]: "/client/register",
  [CLIENT_ROUTE_KEYS.PASSWORD_RESET]: "/client/password-reset",
  [CLIENT_ROUTE_KEYS.BLOGS]: "/client/blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "/client/profile",
  [CLIENT_ROUTE_KEYS.COURSES]: "/client/courses",
} as const;
