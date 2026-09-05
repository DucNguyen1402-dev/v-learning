import type { AppRouteBuilderKey, AppRouteKey } from "@shared/navigation/types";

import {
  CLIENT_ROUTE_URLS,
  type ClientRouteBuilderKey,
  clientRouteBuilderKeys,
  type ClientRouteKey,
  clientRouteKeys,
} from "./constants";

export const findRouteKey = (path: string) =>
  clientRouteKeys.find((key) => CLIENT_ROUTE_URLS[key] === path);

export const isRouteActive = (path: string, key: ClientRouteKey) =>
  key !== null && CLIENT_ROUTE_URLS[key] === path;

export const isClientRouteKey = (key: AppRouteKey) =>
  clientRouteKeys.includes(key as ClientRouteKey);

export const isClientRouteBuilderKey = (
  key: AppRouteBuilderKey,
): key is ClientRouteBuilderKey =>
  clientRouteBuilderKeys.includes(key as ClientRouteBuilderKey);
