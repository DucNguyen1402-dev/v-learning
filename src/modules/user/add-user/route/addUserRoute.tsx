import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { AddUserPage } from "../pages/AddUserPage";

export const addUserRoute = (
  <Route
    path={Navigation.admin.paths.ADMIN_USER_ADD}
    element={<AddUserPage />}
  />
);
