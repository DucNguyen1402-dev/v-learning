import type { ClientRouteKey } from "@shared/navigation";

import {
  type RoutesHideLoginButton,
  routesHideLoginButton,
  type RoutesShowLogoutButton,
  routesShowLogoutButton,
} from "./constants";
export const isRouteHideLoginButton = (
  routeKey: ClientRouteKey,
): routeKey is RoutesHideLoginButton =>
  routesHideLoginButton.has(routeKey as RoutesHideLoginButton);

export const isRouteShowLogoutButton = (
  routeKey: ClientRouteKey,
): routeKey is RoutesShowLogoutButton =>
  routesShowLogoutButton.has(routeKey as RoutesShowLogoutButton);
