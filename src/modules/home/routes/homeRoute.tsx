import { Route } from "react-router-dom";

import { HOME_ROUTE_SEGMENT } from "../navigation/constants";
import { HomePage } from "../pages/HomePage";

export const homeRoute = (
  <Route path={HOME_ROUTE_SEGMENT} element={<HomePage />} />
);
