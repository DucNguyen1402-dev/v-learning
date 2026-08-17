import type { AppRoute } from "@routes";
import { Navigation } from "@shared/navigation";

import { ProfileRoutes } from "./ProfileRoutes";

export const ProfileRoute: AppRoute = {
  path: Navigation.client.paths.PROFILE,
  element: ProfileRoutes,
};
