import { Route } from "react-router-dom";

import { ADD_USER_ROUTE_SEGMENT } from "../navigation/constants";
import { AddUserPage } from "../pages/AddUserPage";

export const addUserRoute = (
  <Route path={ADD_USER_ROUTE_SEGMENT} element={<AddUserPage />} />
);
