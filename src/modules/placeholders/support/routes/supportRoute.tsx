import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { SupportPage } from "../pages/SupportPage";
export const supportRoute = (
  <Route path={Navigation.client.paths.SUPPORT} element={<SupportPage />} />
);
