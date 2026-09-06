import { Route } from "react-router-dom";

import { ABOUT_ROUTE_SEGMENT } from "../navigation/constants";
import { AboutPage } from "../pages/AboutPage";

export const aboutRoute = (
  <Route path={ABOUT_ROUTE_SEGMENT} element={<AboutPage />} />
);
