import { useMemo, useState } from "react";

import type { category } from "@modules/courses/types";

import type { UpgradeCourse } from "./types";
type CoursesFilter = {
  category: category | "all" | null;
  keyword: string | null;
};

type UseCoursesFilterProps = {
  courses: UpgradeCourse[];
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

  const filteredCourses = useMemo(() => {
    const keyword = params.keyword?.trim().toLowerCase() || "";
    const filteredByKeyword = courses.filter(
      (course) =>
        course.tenKhoaHoc.toLowerCase().includes(keyword) ||
        course.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().includes(keyword),
    );

    const filteredByCategory = filteredByKeyword.filter((course) => {
      if (params.category === "all" || !params.category) {
        return true;
      }
      return (
        course.danhMucKhoaHoc.maDanhMucKhoahoc.toLowerCase() === params.category
      );
    });

    return filteredByCategory;
  }, [params, courses]);
  return {
    filteredCourses,
    handleFilterChange,
    category: params.category,
    keyword: params.keyword,
  };
};

export type UseCoursesParamsReturn = ReturnType<typeof useCoursesParams>;
