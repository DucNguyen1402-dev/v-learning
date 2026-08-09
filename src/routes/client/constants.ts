export const CLIENT_ROUTES_KEYS = {
  home: "home",
  login: "login",
  about: "about",
  register: "register",
  passwordReset: "passwordReset",
} as const;

export const CLIENT_ROUTES = {
  home: "/client/home",
  login: "/client/login",
  about: "/client/about",
  register: "/client/register",
  passwordReset: "/client/password-reset",
} as const;

export type ClientRouteKey = keyof typeof CLIENT_ROUTES_KEYS;
