import type { ClientRouteKey } from "@routes/client";

export type AppRoute = {
  path: string;
  element: React.ReactNode;
};

export type RouteKey = ClientRouteKey;
