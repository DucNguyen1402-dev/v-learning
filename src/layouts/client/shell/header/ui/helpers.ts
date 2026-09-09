import {
  type RoutesHideLoginButton,
  routesHideLoginButton,
  type RoutesShowLogoutButton,
  routesShowLogoutButton,
} from "./constants";
export const isRouteHideLoginButton = (
  routeKey: string,
): routeKey is RoutesHideLoginButton =>
  routesHideLoginButton.has(routeKey as RoutesHideLoginButton);

export const isRouteShowLogoutButton = (
  routeKey: string,
): routeKey is RoutesShowLogoutButton =>
  routesShowLogoutButton.has(routeKey as RoutesShowLogoutButton);
