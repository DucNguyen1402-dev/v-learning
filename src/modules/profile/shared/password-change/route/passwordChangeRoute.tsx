import { Route } from "react-router-dom";

import { PASSWORD_CHANGE_ROUTE_SEGMENT } from "../navigation/constants";
import { PasswordChangePage } from "../pages/PasswordChangePage";
export const passwordChangeRoute = (
  <Route
    path={PASSWORD_CHANGE_ROUTE_SEGMENT}
    element={<PasswordChangePage />}
  />
);
