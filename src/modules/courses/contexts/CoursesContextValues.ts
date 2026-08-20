import type { UseCoursesParamsReturn, UseCoursesReturn } from "./hooks";

export type CoursesContextValues = {
  state: {
    isPending: boolean;
    isSuccess: boolean;
  };
  courses: UseCoursesReturn["courses"];
  filter: {
    category: UseCoursesParamsReturn["category"];
    keyword: UseCoursesParamsReturn["keyword"];
    handleFilterChange: UseCoursesParamsReturn["handleFilterChange"];
    filteredCourses: UseCoursesParamsReturn["filteredCourses"];
  };
};
