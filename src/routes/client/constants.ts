export const CLIENT_ROUTES = {
  home: "/client",
  login: "/client/login",
  about: "/client/about",
  register: "/client/register",
  findKey: (path: string) => {
    const key = Object.keys(CLIENT_ROUTES).find(
      (key) => CLIENT_ROUTES[key as keyof typeof CLIENT_ROUTES] === path,
    );
    return key as keyof typeof CLIENT_ROUTES | undefined;
  },
} as const;

export const CLIENT_ROUTES_KEYS = {
  home: "home",
  login: "login",
  about: "about",
} as const;

export type ClientRouteKey = keyof typeof CLIENT_ROUTES_KEYS;
