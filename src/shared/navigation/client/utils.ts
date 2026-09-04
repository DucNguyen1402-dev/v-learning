import type { AdminRouteBuilderKey, AdminRouteKey } from "../admin";
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

export const isRouteActive = (path: string, key: ClientRouteKey) =>
  key !== null && CLIENT_ROUTE_URLS[key] === path;

export const isClientRouteKey = (key: ClientRouteKey | AdminRouteKey) => {
  return clientRouteKeys.includes(key as ClientRouteKey);
};

export const isClientRouteBuilderKey = (
  key: ClientRouteBuilderKey | AdminRouteBuilderKey,
): key is ClientRouteBuilderKey => {
  return clientRouteBuilderKeys.includes(key as ClientRouteBuilderKey);
};
