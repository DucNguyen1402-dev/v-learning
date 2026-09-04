import type { AdminRouteBuilderKey, AdminRouteKey } from "../admin";
import type { ClientRouteBuilderKey, ClientRouteKey } from "../client";

export type AppRouteKey = ClientRouteKey | AdminRouteKey;
export type AppRouteBuilderKey = ClientRouteBuilderKey | AdminRouteBuilderKey;
