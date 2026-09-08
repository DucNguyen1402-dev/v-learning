import type { AdminRouteBuilderKey, AdminRouteKey } from "../areas/admin/types";
import type {
  ClientRouteBuilderKey,
  ClientRouteKey,
} from "../areas/client/types";

export type AppRouteKey = ClientRouteKey | AdminRouteKey;
export type AppRouteBuilderKey = ClientRouteBuilderKey | AdminRouteBuilderKey;
