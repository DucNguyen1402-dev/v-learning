// import { Navigate, Route, Routes } from "react-router-dom";

// import { ClientRouteTree } from "@routes/client";
// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/client" replace />} />
//     {ClientRouteTree}
//   </Routes>
// );
import { Sidebar } from "./Sidebar";

export const App = () => <Sidebar />;
