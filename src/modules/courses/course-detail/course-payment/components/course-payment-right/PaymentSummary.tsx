import { useState } from "react";

export const PaymentSummary = () => {
  const course = {
    originalPrice: 1000000,
    discount: 200000,
    code: "COURSE123",
  };

  const [appliedCoupon] = useState<boolean>(false);
  const finalPrice =
    course.originalPrice - course.discount - (appliedCoupon ? 100000 : 0);

  return (
    <div className="mb-4 space-y-2 border-b border-slate-100 pb-4 text-sm">
      <div className="flex justify-between text-slate-600">
        <span>Giá gốc:</span>
        <span className="line-through">
          {course.originalPrice.toLocaleString("vi-VN")} đ
        </span>
      </div>
      <div className="flex justify-between text-slate-600">
        <span>Giảm giá khóa học:</span>
        <span className="text-emerald-600">
          -{course.discount.toLocaleString("vi-VN")} đ
        </span>
      </div>
      {appliedCoupon && (
        <div className="flex justify-between text-slate-600">
          <span>Voucher áp dụng:</span>
          <span className="text-emerald-600">-100.000 đ</span>
        </div>
      )}
      <div className="flex justify-between border-t border-slate-100 pt-2 text-base font-bold text-slate-900">
        <span>Tổng thanh toán:</span>
        <span className="text-blue-600">
          {finalPrice.toLocaleString("vi-VN")} đ
        </span>
      </div>
    </div>
  );
};
