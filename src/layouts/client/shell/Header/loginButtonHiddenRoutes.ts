import { CLIENT_ROUTES_KEYS, type ClientRouteKey } from "@routes/client";

export const loginButtonHiddenRoutes = new Set<ClientRouteKey>([
  CLIENT_ROUTES_KEYS.register,
  CLIENT_ROUTES_KEYS.passwordReset,
  CLIENT_ROUTES_KEYS.login,
]);
