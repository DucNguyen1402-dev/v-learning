import type { AdminRouteBuilderKey, AdminRouteKey } from "../areas/admin";
import type { ClientRouteBuilderKey, ClientRouteKey } from "../areas/client";

export type AppRouteKey = ClientRouteKey | AdminRouteKey;
export type AppRouteBuilderKey = ClientRouteBuilderKey | AdminRouteBuilderKey;
