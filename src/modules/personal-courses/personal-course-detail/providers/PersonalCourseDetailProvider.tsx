import type { ReactNode } from "react";
import { useParams } from "react-router-dom";

import { PersonalCourseDetailProvider } from "../contexts";

type PersonalCourseDetailProviderProps = {
  children: ReactNode;
};

export const PersonalCourseDetailProviderWrapper = ({
  children,
}: PersonalCourseDetailProviderProps) => {
  const { maKhoaHoc } = useParams<{ maKhoaHoc: string }>();
  return (
    <PersonalCourseDetailProvider maKhoaHoc={maKhoaHoc!}>
      {children}
    </PersonalCourseDetailProvider>
  );
};
