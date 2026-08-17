import { Navigation } from "@shared/navigation";

export const loginButtonHiddenRoutes = new Set<
  keyof typeof Navigation.client.keys
>([Navigation.client.keys.REGISTER, Navigation.client.keys.LOGIN]);
