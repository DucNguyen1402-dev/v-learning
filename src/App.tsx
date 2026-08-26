// import { Navigate, Route, Routes } from "react-router-dom";

// import { ClientRouteTree } from "@routes/client";
// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/client" replace />} />
//     {ClientRouteTree}
//   </Routes>
// );
import { UserProfile } from "@shared/user-profile";

import { Sidebar } from "./sidebar";

import { GlobalProvider } from "@/providers";
export const App = () => (
  <GlobalProvider>
    <UserProfile.Provider>
      <Sidebar />
    </UserProfile.Provider>
  </GlobalProvider>
);
