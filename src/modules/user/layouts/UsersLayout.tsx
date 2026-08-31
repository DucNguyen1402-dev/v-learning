import { Outlet } from "react-router-dom";

import { UserProvider } from "../contexts";
export const UsersLayout = () => {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
};
