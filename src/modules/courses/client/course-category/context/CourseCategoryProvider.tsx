import type { Category } from "@modules/courses/shared/types";

import { CourseCategoryContext } from "./CourseCategoryContext";
import { useCourseCategory } from "./hooks";

type CourseCategoryProviderProps = {
  children: React.ReactNode;
  category: Category;
};

export const CourseCategoryProvider = ({
  children,
  category,
}: CourseCategoryProviderProps) => {
  const value = useCourseCategory({ category });

  return (
    <CourseCategoryContext.Provider value={value}>
      {children}
    </CourseCategoryContext.Provider>
  );
};
