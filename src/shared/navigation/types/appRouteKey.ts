import type {
  AdminRouteBuilderKey,
  AdminRouteKey,
  ClientRouteBuilderKey,
  ClientRouteKey,
} from "../areas";

export type AppRouteKey = ClientRouteKey | AdminRouteKey;
export type AppRouteBuilderKey = ClientRouteBuilderKey | AdminRouteBuilderKey;
