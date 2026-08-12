// import { Navigate, Route, Routes } from "react-router-dom";

// import { ClientRouteTree } from "@routes";

// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/client" replace />} />
//     {ClientRouteTree}
//   </Routes>
// );

import { Field, Select } from "@shared/fields";

export const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-2">
      <Field.Root>
        <Field.Label
          htmlFor="select-field"
          required={true}
          label="Select Field"
        />
        <Select
          id="select-field"
          value=""
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            {
              label: "Group 1",
              options: [
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ],
            },
          ]}
          onChange={() => {}}
        />
      </Field.Root>
    </div>
  );
};
