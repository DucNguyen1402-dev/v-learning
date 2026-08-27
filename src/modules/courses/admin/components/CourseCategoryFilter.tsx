import { categories } from "@modules/courses/shared/config";
import { useCoursesContext } from "@modules/courses/shared/contexts";
import type { Category } from "@modules/courses/shared/types";
import { Select } from "@shared/fields";

export const CourseCategoryFilter = () => {
  const { filter } = useCoursesContext();

  return (
    <Select.Root>
      <Select.Trigger
        id="select"
        labels={{
          disabled: "Disabled",
          required: "Required",
        }}
      />

      <Select.Content
        value={filter.category}
        onChange={(value: Category | null) => filter.onChangeCategory(value)}
        options={categories}
      />
    </Select.Root>
  );
};
