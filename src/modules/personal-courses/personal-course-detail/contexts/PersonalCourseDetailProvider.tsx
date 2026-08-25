import type { ReactNode } from "react";

import { usePersonalCourseDetail } from "./hooks";
import { PersonalCourseDetailContext } from "./PersonalCourseDetailContext";

type PersonalCourseDetailProviderProps = {
  children: ReactNode;
  maKhoaHoc: string;
};

export const PersonalCourseDetailProvider = ({
  children,
  maKhoaHoc,
}: PersonalCourseDetailProviderProps) => {
  const value = usePersonalCourseDetail({ maKhoaHoc });

  return (
    <PersonalCourseDetailContext.Provider value={value}>
      {children}
    </PersonalCourseDetailContext.Provider>
  );
};
