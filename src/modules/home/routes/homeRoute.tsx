import { Route } from "react-router-dom";

import { HOME_ROUTE_PATH } from "../navigation/constants";
import { HomePage } from "../pages/HomePage";

export const homeRoute = (
  <Route path={HOME_ROUTE_PATH} element={<HomePage />} />
);
