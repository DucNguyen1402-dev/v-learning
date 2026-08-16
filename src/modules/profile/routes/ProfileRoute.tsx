import type { AppRoute } from "@routes";
import { Navigation } from "@shared/navigation";

import { ProfilePage } from "../pages/ProfilePage";

export const ProfileRoute: AppRoute = {
  path: Navigation.client.paths.PROFILE,
  element: <ProfilePage />,
};
