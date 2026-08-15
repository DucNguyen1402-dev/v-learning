import { useForm } from "react-hook-form";

import { Field, Select } from "@shared/fields";
import { SquareMousePointer } from "lucide-react";
export const Playground = () => {
  const { control } = useForm();

  return (
    <div className="flex-center min-h-screen w-full border-2 border-red-500">
      <Select.Root>
        <Select.Trigger
          id="select"
          labels={{
            placeholder: "Chọn phân trang",
            disabled: "Disabled",
            required: "Required",
            selected: "Phân trang đã chọn: ",
          }}
          icon={SquareMousePointer}
        />
        <Field.Controller control={control} name="select">
          {({ field }) => (
            <Select.Content
              value={field.value}
              onChange={field.onChange}
              options={[
                { value: 10, label: "10" },
                { value: 20, label: "20" },
                { value: 50, label: "50" },
              ]}
            />
          )}
        </Field.Controller>
      </Select.Root>
    </div>
  );
};
