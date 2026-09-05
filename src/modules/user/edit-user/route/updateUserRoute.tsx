import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { EditUserProvider } from "../contexts";
import { UpdateUserPage } from "../pages/UpdateUserPage";

export const editUserRoute = (
  <Route
    path={Navigation.admin.builderPaths.ADMIN_USER_EDIT}
    element={
      <EditUserProvider>
        <UpdateUserPage />
      </EditUserProvider>
    }
  />
);
