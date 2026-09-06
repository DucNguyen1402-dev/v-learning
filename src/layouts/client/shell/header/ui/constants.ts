import { Navigation } from "@shared/navigation";

export type Status = (typeof routesHideLoginButton)[];

export const routesHideLoginButtonValues = [
  Navigation.client.keys.REGISTER,
  Navigation.client.keys.LOGIN,
] as const;

export type RoutesHideLoginButton =
  (typeof routesHideLoginButtonValues)[number];

export const routesHideLoginButton = new Set<RoutesHideLoginButton>(
  routesHideLoginButtonValues,
);

export const routesShowLogoutButtonValues = [
  Navigation.client.keys.PROFILE,
  Navigation.client.keys.PROFILE_CHANGE,
  Navigation.client.keys.PASSWORD_CHANGE,
] as const;

export type RoutesShowLogoutButton =
  (typeof routesShowLogoutButtonValues)[number];

export const routesShowLogoutButton = new Set<RoutesShowLogoutButton>(
  routesShowLogoutButtonValues,
);
