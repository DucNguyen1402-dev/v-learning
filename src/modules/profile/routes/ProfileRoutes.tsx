import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { ProfileMainLayout } from "../layouts";
import { profileOverviewRoute } from "../profile-overview";

export const profileRoutes = (
  <Route path={Navigation.client.paths.PROFILE} element={<ProfileMainLayout />}>
    {profileOverviewRoute}
  </Route>
);
