import { QueryClient } from "@tanstack/react-query";

import { personalCoursesQueryKeys } from "./personalCoursesQueryKeys";

export const invalidatePersonalCourses = (queryClient: QueryClient) => {
  queryClient.invalidateQueries({ queryKey: personalCoursesQueryKeys });
};
