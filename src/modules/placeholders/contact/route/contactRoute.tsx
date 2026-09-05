import { Route } from "react-router-dom";

import { CONTACT_ROUTE_SEGMENT } from "../navigation/constants";
import { ContactPage } from "../pages/ContactPage";
export const contactRoute = (
  <Route path={CONTACT_ROUTE_SEGMENT} element={<ContactPage />} />
);
