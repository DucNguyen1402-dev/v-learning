import { Navigation } from "@shared/navigation";

import { CourseDetailProvider } from "../contexts";

type CourseDetailProviderWrapperProps = {
  children: React.ReactNode;
};
export const CourseDetailProviderWrapper = ({
  children,
}: CourseDetailProviderWrapperProps) => {
  const { maKhoaHoc } = Navigation.hooks.useParams();

  return (
    <CourseDetailProvider maKhoaHoc={maKhoaHoc as string}>
      {children}
    </CourseDetailProvider>
  );
};
