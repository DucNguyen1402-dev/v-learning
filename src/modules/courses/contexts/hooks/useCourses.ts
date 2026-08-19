import { useCoursesQuery } from "./useCoursesQuery";

export const useCourses = () => {
  const { data: courses, isPending } = useCoursesQuery();

  return { courses, isPending };
};

export type UseCoursesReturn = ReturnType<typeof useCourses>;
