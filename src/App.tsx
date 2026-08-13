// import { Navigate, Route, Routes } from "react-router-dom";

// import { ClientRouteTree } from "@routes";

// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/client" replace />} />
//     {ClientRouteTree}
//   </Routes>
// );

import { Checkbox, Field } from "@shared/fields";

export const App = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center gap-2">
      <Field.Root>
        <Field.Label for="remember-me-checkbox" label="Remember me" />
        <Checkbox id="remember-me-checkbox" />
      </Field.Root>
    </div>
  );
};
