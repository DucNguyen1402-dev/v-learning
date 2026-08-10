import type { AppRoute } from "@routes/client";
import { CLIENT_ROUTES_KEYS } from "@routes/client";

import { ProfilePage } from "../pages/ProfilePage";

export const ProfileRoute: AppRoute = {
  path: CLIENT_ROUTES_KEYS.profile,
  element: <ProfilePage />,
};
