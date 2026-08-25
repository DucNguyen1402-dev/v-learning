import { useState } from "react";

import type { Category } from "@modules/courses/client/types";
export const useCoursesFilterByCategory = () => {
  const [category, setCategory] = useState<Category | "all">("all");

  const onChangeCategory = (newCategory: Category | "all") =>
    setCategory(newCategory);

  return {
    category,
    onChangeCategory,
  };
};
