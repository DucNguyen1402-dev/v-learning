import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { UpdateUserPage } from "../pages/UpdateUserPage";

export const editUserRoute = (
  <Route
    path={Navigation.admin.buildersPaths.USER_EDIT}
    element={<UpdateUserPage />}
  />
);
