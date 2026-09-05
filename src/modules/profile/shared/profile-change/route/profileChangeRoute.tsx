import { Route } from "react-router-dom";

import { PROFILE_CHANGE_ROUTE_PATH } from "../navigation/constants";
import { ProfileChangePage } from "../pages/ProfileChangePage";

export const profileChangeRoute = (
  <Route path={PROFILE_CHANGE_ROUTE_PATH} element={<ProfileChangePage />} />
);
