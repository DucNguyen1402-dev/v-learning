import { Route } from "react-router-dom";

import { EVENT_ROUTE_SEGMENT } from "../navigation/constants";
import { EventPage } from "../pages/EventPage";
export const eventRoute = (
  <Route path={EVENT_ROUTE_SEGMENT} element={<EventPage />} />
);
