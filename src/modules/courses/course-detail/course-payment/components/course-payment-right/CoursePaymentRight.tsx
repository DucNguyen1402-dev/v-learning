import { CouponInput } from "./CouponInput";
import { CoursePaymentInfo } from "./CoursePaymentInfo";
import { PaymentConfirmation } from "./PaymentConfirmation";
import { PaymentGateway } from "./PaymentGateway";
import { PaymentSummary } from "./PaymentSummary";

export const CoursePaymentRight = () => {
  return (
    <div className="space-y-6 md:col-span-5">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Tóm tắt đơn hàng
        </h2>

        {/* Thông tin khóa học */}

        <CoursePaymentInfo />

        {/* Mã giảm giá */}
        <CouponInput />
        {/* Bảng tính tiền */}
        <PaymentSummary />

        {/* Khu vực QR / Hướng dẫn thanh toán */}

        <PaymentGateway />

        <PaymentConfirmation />
      </div>
    </div>
  );
};
