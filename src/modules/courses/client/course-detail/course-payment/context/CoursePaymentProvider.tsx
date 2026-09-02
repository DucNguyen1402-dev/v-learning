import type { ReactNode } from "react";

import { CoursePaymentContext } from "./CoursePaymentContext";
import { useCoursePayment } from "./hooks";

type CoursePaymentProviderProps = {
  maKhoaHoc: string;
  children: ReactNode;
};

export const CoursePaymentProvider = ({
  maKhoaHoc,
  children,
}: CoursePaymentProviderProps) => {
  const coursePayment = useCoursePayment({ maKhoaHoc });

  return (
    <CoursePaymentContext.Provider value={coursePayment}>
      {children}
    </CoursePaymentContext.Provider>
  );
};
