import { Route } from "react-router-dom";

import { COMMUNITY_ROUTE_SEGMENT } from "../navigation/constants";
import { CommunityPage } from "../pages/CommunityPage";
export const communityRoute = (
  <Route path={COMMUNITY_ROUTE_SEGMENT} element={<CommunityPage />} />
);
