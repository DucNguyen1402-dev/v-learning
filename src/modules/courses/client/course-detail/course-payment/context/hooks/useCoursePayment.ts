import { useState } from "react";

import { useCourseRegister } from "./useCourseRegister";

export const useCoursePayment = ({ maKhoaHoc }: { maKhoaHoc: string }) => {
  const { handleRegisterCourse, isRegistering } = useCourseRegister({
    maKhoaHoc,
  });
  const [selectedMethod, setSelectedMethod] = useState("qr");

  const onPaymentMethodChange = (method: string) => {
    setSelectedMethod(method);
  };
  return {
    handleRegisterCourse,
    isRegistering,
    onPaymentMethodChange,
    selectedMethod,
  };
};
export type UseCoursePaymentReturn = ReturnType<typeof useCoursePayment>;
