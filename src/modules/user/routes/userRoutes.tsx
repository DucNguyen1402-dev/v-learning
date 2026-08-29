import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { UsersLayout } from "../layouts";
import { UserPage } from "../pages/UserPage";

export const userRoutes = (
  <Route path={Navigation.admin.paths.USER} element={<UsersLayout />}>
    <Route index element={<UserPage />} />
  </Route>
);
