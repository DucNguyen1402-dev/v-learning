export const CLIENT_ROUTES_KEYS = {
  home: "home",
  login: "login",
  about: "about",
  register: "register",
  passwordReset: "passwordReset",
  blogs: "blogs",
  profile: "profile",
  courses: "courses",
} as const;

export const CLIENT_ROUTES = {
  home: "/client/home",
  login: "/client/login",
  about: "/client/about",
  register: "/client/register",
  passwordReset: "/client/password-reset",
  profile: "/client/profile",
  blogs: "/client/blogs",
  courses: "/client/courses",
} as const;

export type ClientRouteKey = keyof typeof CLIENT_ROUTES_KEYS;
