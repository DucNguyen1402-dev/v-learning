import { CoursePaymentMethods } from "./CoursePaymentMethods";
import { UserPaymentInfo } from "./UserPaymentInfo";

export const CoursePaymentLeft = () => {
  return (
    <div className="flex h-full flex-col gap-2">
      <UserPaymentInfo />
      <div className="flex-1">
        <CoursePaymentMethods />
      </div>
    </div>
  );
};
