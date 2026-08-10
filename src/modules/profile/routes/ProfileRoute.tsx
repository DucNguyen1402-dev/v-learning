import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { ProfilePage } from "../pages/ProfilePage";

export const ProfileRoute: AppRoute = {
  path: AppRoutes.client.paths.PROFILE,
  element: <ProfilePage />,
};
