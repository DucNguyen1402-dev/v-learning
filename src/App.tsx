// import { Navigate, Route, Routes } from "react-router-dom";

// import { ClientRouteTree } from "@routes";

// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/client" replace />} />
//     {ClientRouteTree}
//   </Routes>
// );

import { Input } from "@shared/fields";

export const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-2">
      <Input.Root>
        <Input.Field />

        <Input.RightAddon>
          <Input.PasswordVisibilityToggle />
        </Input.RightAddon>
      </Input.Root>
    </div>
  );
};
