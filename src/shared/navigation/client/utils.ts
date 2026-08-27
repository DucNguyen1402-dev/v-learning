import {
  CLIENT_ROUTE_URLS,
  type ClientRouteBuilderKey,
  clientRouteBuilderKeys,
  type ClientRouteKey,
  clientRouteKeys,
} from "./constants";

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

export const isClientRouteKey = (key: ClientRouteKey) => {
  return clientRouteKeys.includes(key);
};

export const isClientRouteBuilderKey = (key: ClientRouteBuilderKey) => {
  return clientRouteBuilderKeys.includes(key);
};
