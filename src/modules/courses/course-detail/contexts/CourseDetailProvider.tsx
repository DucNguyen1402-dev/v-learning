import type { ReactNode } from "react";

import { CourseDetailContext } from "./CourseDetailContext";
import { useCourseDetail } from "./hooks";

type CourseDetailProviderProps = {
  children: ReactNode;
  maKhoaHoc: string;
};

export const CourseDetailProvider = ({
  children,
  maKhoaHoc,
}: CourseDetailProviderProps) => {
  const value = useCourseDetail({ maKhoaHoc });
  return (
    <CourseDetailContext.Provider value={value}>
      {children}
    </CourseDetailContext.Provider>
  );
};
