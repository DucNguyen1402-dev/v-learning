import { Route } from "react-router-dom";

import { EditUserProvider } from "../contexts";
import { EDIT_USER_ROUTE_SEGMENT } from "../navigation/constants";
import { UpdateUserPage } from "../pages/UpdateUserPage";

export const editUserRoute = (
  <Route
    path={EDIT_USER_ROUTE_SEGMENT}
    element={
      <EditUserProvider>
        <UpdateUserPage />
      </EditUserProvider>
    }
  />
);
