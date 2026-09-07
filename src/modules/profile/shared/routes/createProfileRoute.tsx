import { Route } from "react-router-dom";

import { ProfileMainLayout } from "../layouts";
import { ProfileOverviewPage } from "../pages";
import { passwordChangeRoute, profileChangeRoute } from "../sub-modules";
import { RequireCurrentUser } from "./RequireCurrentUser";
export const createProfileRoute = (segment: string) => (
  <Route path={segment} element={<ProfileMainLayout />}>
    <Route
      index
      element={
        <RequireCurrentUser>
          <ProfileOverviewPage />
        </RequireCurrentUser>
      }
    />
    {profileChangeRoute}
    {passwordChangeRoute}
  </Route>
);
