import { useParams } from "react-router-dom";

import { CoursePaymentProvider } from "../context";

export const CoursePaymentRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { maKhoaHoc } = useParams<{ maKhoaHoc: string }>();

  return (
    <CoursePaymentProvider maKhoaHoc={maKhoaHoc!}>
      {children}
    </CoursePaymentProvider>
  );
};
