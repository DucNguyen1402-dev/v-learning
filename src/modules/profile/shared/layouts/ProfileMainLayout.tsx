import { Outlet } from "react-router-dom";

import { ProfileProvider } from "../provider";
export const ProfileMainLayout = () => {
  return (
    <>
      <ProfileProvider>
        <Outlet />
      </ProfileProvider>
    </>
  );
};
