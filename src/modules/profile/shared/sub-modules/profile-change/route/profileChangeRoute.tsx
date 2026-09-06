import { Route } from "react-router-dom";

import { PROFILE_CHANGE_ROUTE_SEGMENT } from "../navigation/constants";
import { ProfileChangePage } from "../pages/ProfileChangePage";

export const profileChangeRoute = (
  <Route path={PROFILE_CHANGE_ROUTE_SEGMENT} element={<ProfileChangePage />} />
);
