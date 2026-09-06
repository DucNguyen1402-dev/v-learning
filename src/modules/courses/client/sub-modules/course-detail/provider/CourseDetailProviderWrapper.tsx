import { useParams } from "react-router-dom";

import { CourseDetailProvider } from "../contexts";

type CourseDetailProviderWrapperProps = {
  children: React.ReactNode;
};
export const CourseDetailProviderWrapper = ({
  children,
}: CourseDetailProviderWrapperProps) => {
  const { maKhoaHoc } = useParams();

  return (
    <CourseDetailProvider maKhoaHoc={maKhoaHoc as string}>
      {children}
    </CourseDetailProvider>
  );
};
