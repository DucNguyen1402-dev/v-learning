import { Route } from "react-router-dom";

import { ProfileChangePage } from "../pages/ProfileChangePage";

export const profileChangeRoute = (
  <Route path="change" element={<ProfileChangePage />} />
);
