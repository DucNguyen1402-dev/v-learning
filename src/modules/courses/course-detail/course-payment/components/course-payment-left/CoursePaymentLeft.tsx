import { CoursePaymentMethods } from "./CoursePaymentMethods";
import { UserPaymentInfo } from "./UserPaymentInfo";

export const CoursePaymentLeft = () => {
  return (
    <div className="flex flex-col gap-3">
      <UserPaymentInfo />
      <CoursePaymentMethods />
    </div>
  );
};
