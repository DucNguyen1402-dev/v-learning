import { Navigation } from "@shared/navigation";

export const routesHideLoginButton = new Set<
  keyof typeof Navigation.client.keys
>([Navigation.client.keys.REGISTER, Navigation.client.keys.LOGIN]);

export const routesShowLogoutButton = new Set<
  keyof typeof Navigation.client.keys
>([
  Navigation.client.keys.PROFILE,
  Navigation.client.keys.PROFILE_CHANGE,
  Navigation.client.keys.PROFILE_PASSWORD_CHANGE,
]);
