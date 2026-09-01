import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CommunityPage } from "../pages/CommunityPage";
export const communityRoute = (
  <Route path={Navigation.client.paths.COMMUNITY} element={<CommunityPage />} />
);
