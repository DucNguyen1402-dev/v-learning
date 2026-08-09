import { CLIENT_ROUTES } from "./constants";

export const findRouteKey = (path: string) => {
  const key = Object.keys(CLIENT_ROUTES).find(
    (key) => CLIENT_ROUTES[key as keyof typeof CLIENT_ROUTES] === path,
  );
  return key as keyof typeof CLIENT_ROUTES | undefined;
};
