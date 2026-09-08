import type { AppRouteBuilderKey, AppRouteKey } from "@shared/navigation/types";

import {
  CLIENT_ROUTE_BUILDER_KEYS,
  CLIENT_ROUTE_KEYS,
  CLIENT_ROUTE_PATHS,
} from "./registry";
import type { ClientRouteBuilderKey, ClientRouteKey } from "./types";

export const findRouteKey = (path: string) =>
  Object.values(CLIENT_ROUTE_KEYS).find(
    (key) => CLIENT_ROUTE_PATHS[key] === path,
  );

export const isRouteActive = (path: string, key: ClientRouteKey) =>
  key !== null && CLIENT_ROUTE_PATHS[key] === path;

export const isClientRouteKey = (key: AppRouteKey) =>
  Object.values(CLIENT_ROUTE_KEYS).includes(key as ClientRouteKey);

export const isClientRouteBuilderKey = (
  key: AppRouteBuilderKey,
): key is ClientRouteBuilderKey =>
  Object.values(CLIENT_ROUTE_BUILDER_KEYS).includes(
    key as ClientRouteBuilderKey,
  );
