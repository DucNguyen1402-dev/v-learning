import { Route } from "react-router-dom";

import { SUPPORT_ROUTE_SEGMENT } from "../navigation/constants";
import { SupportPage } from "../pages/SupportPage";
export const supportRoute = (
  <Route path={SUPPORT_ROUTE_SEGMENT} element={<SupportPage />} />
);
