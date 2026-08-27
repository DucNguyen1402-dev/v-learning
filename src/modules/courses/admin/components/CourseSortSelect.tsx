import { useForm } from "react-hook-form";

import { Field, Select } from "@shared/fields";

const options = [
  {
    label: "Đánh giá",
    options: [
      { label: "Đánh giá cao nhất", value: "rating-desc" },
      { label: "Đánh giá thấp nhất", value: "rating-asc" },
    ],
  },
  {
    label: "ngày tạo",
    options: [
      { label: "Mới tạo", value: "date-desc" },
      { label: "Tạo lâu nhất", value: "date-asc" },
    ],
  },
  {
    label: "Tên khóa học",
    options: [
      { label: "A → Z", value: "name-asc" },
      { label: "Z → A", value: "name-desc" },
    ],
  },
];

export const CourseSortSelect = () => {
  const { control } = useForm();
  return (
    <Select.Root>
      <Select.Trigger
        id="select"
        labels={{
          placeholder: "Chọn sắp xếp",
          disabled: "Disabled",
          required: "Required",
        }}
      />
      <Field.Controller control={control} name="select">
        {({ field }) => (
          <Select.Content
            value={field.value}
            onChange={field.onChange}
            options={options}
          />
        )}
      </Field.Controller>
    </Select.Root>
  );
};
