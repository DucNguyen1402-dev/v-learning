import { useForm } from "react-hook-form";

import { categories } from "@modules/courses/shared/config";
import { Field, Select } from "@shared/fields";

export const CourseCategoryFilter = () => {
  const { control } = useForm();
  return (
    <Select.Root>
      <Select.Trigger
        id="select"
        labels={{
          placeholder: "Chọn danh mục",
          disabled: "Disabled",
          required: "Required",
          selected: "danh mục: ",
        }}
      />
      <Field.Controller control={control} name="select">
        {({ field }) => (
          <Select.Content
            value={field.value}
            onChange={field.onChange}
            options={categories}
          />
        )}
      </Field.Controller>
    </Select.Root>
  );
};
