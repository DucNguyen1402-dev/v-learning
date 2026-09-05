import { Route } from "react-router-dom";

import { ProfileMainLayout } from "../layouts";
import { ProfileOverviewPage } from "../pages";
import { passwordChangeRoute } from "../password-change";
import { profileChangeRoute } from "../profile-change";

export const createProfileRoute = (segment: string) => (
  <Route path={segment} element={<ProfileMainLayout />}>
    <Route index element={<ProfileOverviewPage />} />
    {profileChangeRoute}
    {passwordChangeRoute}
  </Route>
);
