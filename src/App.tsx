// import { AppRoutes } from "@routes";

// import { AppProvider } from "@/providers";

// export const App = () => (
//   <AppProvider>
//     <AppRoutes />
//   </AppProvider>
// );
// import { Navigate, Outlet, Route, Routes } from "react-router-dom";

// import { UserProfile } from "@shared/user-profile";

// import { Sidebar } from "./sidebar";

// import { AppProvider } from "@/providers";
// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/admin" replace />} />
//     <Route path="/admin" element={<Outlet />}>
//       <Route index element={<Navigate to="/admin/dashboard" replace />} />
//       <Route
//         path="dashboard"
//         element={
//           <AppProvider>
//             <UserProfile.Provider>
//               <Sidebar />
//             </UserProfile.Provider>
//           </AppProvider>
//         }
//       />
//     </Route>
//   </Routes>
// );
