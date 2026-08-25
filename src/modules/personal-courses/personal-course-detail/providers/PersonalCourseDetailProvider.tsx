import type { ReactNode } from "react";

import { Navigation } from "@shared/navigation";

import { PersonalCourseDetailProvider } from "../contexts";

type PersonalCourseDetailProviderProps = {
  children: ReactNode;
};

export const PersonalCourseDetailProviderWrapper = ({
  children,
}: PersonalCourseDetailProviderProps) => {
  const { maKhoaHoc } = Navigation.hooks.useParams();
  return (
    <PersonalCourseDetailProvider maKhoaHoc={maKhoaHoc!}>
      {children}
    </PersonalCourseDetailProvider>
  );
};
