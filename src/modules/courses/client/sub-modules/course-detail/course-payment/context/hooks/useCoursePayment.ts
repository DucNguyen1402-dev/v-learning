import { useMemo, useState } from "react";

import { EMPTY_COURSE } from "@modules/courses/shared/constants";
import { useCourseDetailQuery } from "@modules/courses/shared/hooks";

import { enrichCourseDetail } from "../../../utils";
import { useCourseRegister } from "./useCourseRegister";

export const useCoursePayment = ({ maKhoaHoc }: { maKhoaHoc: string }) => {
  const { handleRegisterCourse, isRegistering } = useCourseRegister({
    maKhoaHoc,
  });

  const { data: courseDetail = EMPTY_COURSE } = useCourseDetailQuery(
    maKhoaHoc!,
  );

  const enrichedCourseDetail = useMemo(
    () => enrichCourseDetail(courseDetail),
    [courseDetail],
  );
  const [selectedMethod, setSelectedMethod] = useState("qr");

  const onPaymentMethodChange = (method: string) => {
    setSelectedMethod(method);
  };
  return {
    handleRegisterCourse,
    isRegistering,
    onPaymentMethodChange,
    selectedMethod,
    coursePaymentInfo: {
      thumbnail: enrichedCourseDetail?.thumbnail,
      tenKhoaHoc: enrichedCourseDetail?.tenKhoaHoc,
      tenGiangVien: enrichedCourseDetail?.tenGiangVien,
      price: enrichedCourseDetail?.price,
    },
  };
};
export type UseCoursePaymentReturn = ReturnType<typeof useCoursePayment>;
