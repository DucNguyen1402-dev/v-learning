import { AppRoutes } from "@routes";
import type { ClientRouteKey } from "@routes/client";

export const loginButtonHiddenRoutes = new Set<ClientRouteKey>([
  AppRoutes.client.keys.REGISTER,
  AppRoutes.client.keys.LOGIN,
]);
