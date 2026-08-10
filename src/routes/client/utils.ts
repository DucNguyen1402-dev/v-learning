import { CLIENT_ROUTE_URLS } from "./constants";

export const findRouteKey = (path: string) => {
  const key = Object.keys(CLIENT_ROUTE_URLS).find(
    (key) => CLIENT_ROUTE_URLS[key as keyof typeof CLIENT_ROUTE_URLS] === path,
  );
  return key as keyof typeof CLIENT_ROUTE_URLS | undefined;
};

export const isRouteActive = (
  path: string,
  key: keyof typeof CLIENT_ROUTE_URLS | null,
) => key !== null && CLIENT_ROUTE_URLS[key] === path;
