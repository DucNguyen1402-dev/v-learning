import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { EventPage } from "../pages/EventPage";
export const eventRoute = (
  <Route path={Navigation.client.paths.EVENTS} element={<EventPage />} />
);
