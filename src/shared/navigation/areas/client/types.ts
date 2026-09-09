import { CLIENT_ROUTE_BUILDER_KEYS, CLIENT_ROUTE_KEYS } from "./registry";

export type ClientRouteKey =
  (typeof CLIENT_ROUTE_KEYS)[keyof typeof CLIENT_ROUTE_KEYS];

export type ClientRouteBuilderKey =
  (typeof CLIENT_ROUTE_BUILDER_KEYS)[keyof typeof CLIENT_ROUTE_BUILDER_KEYS];
