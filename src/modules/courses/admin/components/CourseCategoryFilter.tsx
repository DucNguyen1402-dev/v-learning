import { useCoursesContext } from "@modules/courses/admin/contexts";
import { categories } from "@modules/courses/shared/config";
import { Category } from "@modules/courses/shared/types";
import { Select } from "@shared/fields";

export const CourseCategoryFilter = () => {
  const { filter } = useCoursesContext();
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

      <Select.Content
        value={filter.category}
        onChange={(value: Category) => filter.onChangeCategory(value)}
        options={categories}
      />
    </Select.Root>
  );
};
