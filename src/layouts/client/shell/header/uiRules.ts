import { Navigation } from "@shared/navigation";
import type { ClientRouteKey } from "@shared/navigation/areas";

export const routesHideLoginButton = new Set<ClientRouteKey>([
  Navigation.client.keys.REGISTER,
  Navigation.client.keys.LOGIN,
]);

export const routesShowLogoutButton = new Set<ClientRouteKey>([
  Navigation.client.keys.PROFILE,
  Navigation.client.keys.PROFILE_CHANGE,
  Navigation.client.keys.PASSWORD_CHANGE,
]);
