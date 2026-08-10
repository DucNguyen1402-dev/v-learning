import { CLIENT_ROUTES } from "./constants";

export const findRouteKey = (path: string) => {
  const key = Object.keys(CLIENT_ROUTES).find(
    (key) => CLIENT_ROUTES[key as keyof typeof CLIENT_ROUTES] === path,
  );
  return key as keyof typeof CLIENT_ROUTES | undefined;
};

export const isRouteActive = (
  path: string,
  key: keyof typeof CLIENT_ROUTES | null,
) => key !== null && CLIENT_ROUTES[key] === path;
