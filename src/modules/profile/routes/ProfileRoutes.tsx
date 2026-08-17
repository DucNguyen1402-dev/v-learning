import { Route } from "react-router-dom";

import { ProfileLayout } from "../layouts/ProfileLayout";
import { ProfileOverviewPage } from "../profile-overview";
import { ProfileProvider } from "../provider/ProfileProvider";
export const ProfileRoutes = (
  <>
    <Route
      index
      element={
        <ProfileProvider>
          <ProfileLayout />
        </ProfileProvider>
      }
    />

    <Route path="overview" element={<ProfileOverviewPage />} />
    <Route path="profile-change" element={<ProfileOverviewPage />} />
  </>
);
