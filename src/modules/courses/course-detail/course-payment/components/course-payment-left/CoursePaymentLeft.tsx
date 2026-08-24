import { CoursePaymentMethods } from "./CoursePaymentMethods";
import { UserPaymentInfo } from "./UserPaymentInfo";

export const CoursePaymentLeft = () => {
  return (
    <div>
      <UserPaymentInfo />
      <CoursePaymentMethods />
    </div>
  );
};
