import { CoursePaymentInfo } from "./CoursePaymentInfo";
import { PaymentConfirmation } from "./PaymentConfirmation";
import { PaymentGateway } from "./PaymentGateway";
import { PaymentSummary } from "./PaymentSummary";

export const CoursePaymentRight = () => {
  return (
    <div className="flex h-full flex-col gap-4 rounded-container border border-b border-border-subtle bg-bg-default p-6 shadow-surface">
      <h2 className="text-lg font-semibold">3. Tóm tắt đăng ký</h2>

      <div className="mt-4">
        <CoursePaymentInfo />
      </div>

      <PaymentSummary />
      <PaymentGateway />
      <div className="mt-4">
        <PaymentConfirmation />
      </div>
    </div>
  );
};
