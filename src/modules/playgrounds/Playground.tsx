import { useForm } from "react-hook-form";

import { Field } from "@shared/fields";
import { Pagination } from "@shared/table";

export const Playground = () => {
  const { control } = useForm();

  return (
    <div className="flex-center min-h-screen w-full border-2 border-red-500">
      <Field.Controller control={control} name="select">
        {({ field }) => (
          <Pagination.Select
            id="select"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      </Field.Controller>
    </div>
  );
};
