export const CLIENT_ROUTE_KEYS = {
  HOME: "HOME",
  LOGIN: "LOGIN",
  ABOUT: "ABOUT",
  REGISTER: "REGISTER",
  BLOGS: "BLOGS",
  PROFILE: "PROFILE",
  COURSES: "COURSES",
} as const;

export type ClientRouteKey = keyof typeof CLIENT_ROUTE_KEYS;

export const CLIENT_ROUTE_PATHS = {
  [CLIENT_ROUTE_KEYS.HOME]: "home",
  [CLIENT_ROUTE_KEYS.LOGIN]: "login",
  [CLIENT_ROUTE_KEYS.ABOUT]: "about",
  [CLIENT_ROUTE_KEYS.REGISTER]: "register",
  [CLIENT_ROUTE_KEYS.BLOGS]: "blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "profile",
  [CLIENT_ROUTE_KEYS.COURSES]: "courses",
} as const;

export const CLIENT_ROUTE_TITLES = {
  [CLIENT_ROUTE_KEYS.HOME]: "Home",
  [CLIENT_ROUTE_KEYS.LOGIN]: "Login",
  [CLIENT_ROUTE_KEYS.ABOUT]: "About",
  [CLIENT_ROUTE_KEYS.REGISTER]: "Register",
  [CLIENT_ROUTE_KEYS.BLOGS]: "Blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "Profile",
  [CLIENT_ROUTE_KEYS.COURSES]: "Courses",
} as const;

export const CLIENT_ROUTE_URLS = {
  [CLIENT_ROUTE_KEYS.HOME]: "/client/home",
  [CLIENT_ROUTE_KEYS.LOGIN]: "/client/login",
  [CLIENT_ROUTE_KEYS.ABOUT]: "/client/about",
  [CLIENT_ROUTE_KEYS.REGISTER]: "/client/register",
  [CLIENT_ROUTE_KEYS.BLOGS]: "/client/blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "/client/profile",
  [CLIENT_ROUTE_KEYS.COURSES]: "/client/courses",
} as const;
