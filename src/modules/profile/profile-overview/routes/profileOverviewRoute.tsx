import { Route } from "react-router-dom";

import { ProfileOverviewPage } from "../pages/ProfileOverviewPage";

export const profileOverviewRoute = (
  <Route index element={<ProfileOverviewPage />} />
);
