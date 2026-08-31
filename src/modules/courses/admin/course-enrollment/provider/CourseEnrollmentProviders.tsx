import { useParams } from "react-router-dom";

import { CourseEnrollmentProvider } from "../contexts";

type CourseEnrollmentPageProps = {
  children?: React.ReactNode;
};

export const CourseEnrollmentProviders = ({
  children,
}: CourseEnrollmentPageProps) => {
  const { maKhoaHoc } = useParams<{ maKhoaHoc: string }>();

  return (
    <CourseEnrollmentProvider maKhoaHoc={maKhoaHoc as string}>
      {children}
    </CourseEnrollmentProvider>
  );
};
