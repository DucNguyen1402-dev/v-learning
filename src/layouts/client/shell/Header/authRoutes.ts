import {
  CLIENT_ROUTES_KEYS,
  type ClientRouteKey,
} from "@routes/client/constants";

export const authRoutes = new Set<ClientRouteKey>([
  CLIENT_ROUTES_KEYS.register,
  CLIENT_ROUTES_KEYS.passwordReset,
  CLIENT_ROUTES_KEYS.login,
]);
