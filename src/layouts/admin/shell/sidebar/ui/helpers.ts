import {
  type RoutesShowLogoutButton,
  routesShowLogoutButton,
} from "./constants";

export const isRouteShowLogoutButton = (
  routeKey: string,
): routeKey is RoutesShowLogoutButton =>
  routesShowLogoutButton.has(routeKey as RoutesShowLogoutButton);
