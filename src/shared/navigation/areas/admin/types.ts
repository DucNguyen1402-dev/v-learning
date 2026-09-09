import { ADMIN_ROUTE_BUILDER_KEYS, ADMIN_ROUTE_KEYS } from "./registry";

export type AdminRouteKey =
  (typeof ADMIN_ROUTE_KEYS)[keyof typeof ADMIN_ROUTE_KEYS];

export type AdminRouteBuilderKey =
  (typeof ADMIN_ROUTE_BUILDER_KEYS)[keyof typeof ADMIN_ROUTE_BUILDER_KEYS];
