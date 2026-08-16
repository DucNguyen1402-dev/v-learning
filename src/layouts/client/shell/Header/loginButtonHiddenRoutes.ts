import type { ClientRouteKey } from "@routes/client";
import { Navigation } from "@shared/navigation";

export const loginButtonHiddenRoutes = new Set<ClientRouteKey>([
  Navigation.client.keys.REGISTER,
  Navigation.client.keys.LOGIN,
]);
