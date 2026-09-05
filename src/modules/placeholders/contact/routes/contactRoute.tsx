import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { ContactPage } from "../pages/ContactPage";
export const contactRoute = (
  <Route
    path={Navigation.client.paths.CLIENT_CONTACT}
    element={<ContactPage />}
  />
);
