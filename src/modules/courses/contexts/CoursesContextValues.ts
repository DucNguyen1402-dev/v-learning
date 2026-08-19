import type { UseCoursesReturn } from "./hooks";

export type CoursesContextValues = {
  state: {
    isPending: boolean;
  };
  courses: UseCoursesReturn["courses"];
};
