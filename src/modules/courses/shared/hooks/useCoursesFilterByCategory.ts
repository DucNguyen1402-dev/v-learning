import { useState } from "react";

import type { Category } from "@/modules/courses/shared/types";
export const useCoursesFilterByCategory = () => {
  const [category, setCategory] = useState<Category | null>(null);

  const onChangeCategory = (newCategory: Category | null) =>
    setCategory(newCategory);

  const resetCategory = () => setCategory(null);

  return {
    category,
    onChangeCategory,
    resetCategory,
  };
};
