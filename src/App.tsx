// import { Navigate, Route, Routes } from "react-router-dom";

// import { ClientRouteTree } from "@routes";

// export const App = () => (
//   <Routes>
//     <Route path="/" element={<Navigate to="/client" replace />} />
//     {ClientRouteTree}
//   </Routes>
// );

import { Controller, useForm } from "react-hook-form";

import { DateInput, Field } from "@shared/fields";

export const App = () => {
  const { control, getValues } = useForm();

  const value = getValues("date-input-field");
  return (
    <div className="relative flex min-h-screen items-center justify-center gap-2">
      <Field.Root>
        <Field.Label
          htmlFor="date-input-field"
          required={true}
          label="Ngày sinh"
        />
        <DateInput.Root>
          <DateInput.Button
            id="date-input-field"
            labels={{
              placeholder: "Chọn ngày",
              disabled: "Disabled",
              required: "Required",
            }}
            value={value}
          />
          <Controller
            name="date-input-field"
            control={control}
            render={({ field }) => (
              <DateInput.Content
                {...field}
                onChange={(date) => field.onChange(date)}
                value={field.value}
              />
            )}
          />
        </DateInput.Root>
      </Field.Root>
    </div>
  );
};
