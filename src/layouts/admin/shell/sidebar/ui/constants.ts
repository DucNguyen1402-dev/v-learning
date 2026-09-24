import { Navigation } from "@shared/navigation";

export const routesShowLogoutButtonValues = [
  Navigation.admin.keys.PROFILE,
  Navigation.admin.keys.PROFILE_CHANGE,
  Navigation.admin.keys.PASSWORD_CHANGE,
] as const;

export type RoutesShowLogoutButton =
  (typeof routesShowLogoutButtonValues)[number];

export const routesShowLogoutButton = new Set<RoutesShowLogoutButton>(
  routesShowLogoutButtonValues,
);
