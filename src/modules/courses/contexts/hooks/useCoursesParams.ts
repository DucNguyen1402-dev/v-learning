import { useState } from "react";

import type {
  CoursesFilter,
  PaginatedCourseItems,
} from "@modules/courses/types";

import { filterCoursesByCategory } from "./utils";

type UseCoursesFilterProps = {
  courses: PaginatedCourseItems | undefined;
};
export const useCoursesParams = ({ courses }: UseCoursesFilterProps) => {
  const [params, setParams] = useState<CoursesFilter>({
    category: "all",
    keyword: null,
  });

  const handleFilterChange = (filter: Partial<CoursesFilter>) => {
    setParams((prev) => ({
      ...prev,
      ...filter,
    }));
  };

  const filteredCourses = filterCoursesByCategory({
    courses: courses,
    keyword: params.keyword,
    category: params.category,
  });

  return {
    filteredCourses,
    handleFilterChange,
    category: params.category,
    keyword: params.keyword,
  };
};

export type UseCoursesParamsReturn = ReturnType<typeof useCoursesParams>;
