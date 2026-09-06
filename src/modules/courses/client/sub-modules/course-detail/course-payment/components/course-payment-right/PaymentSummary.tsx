import { useState } from "react";

import { formatVND } from "@shared/utils";

import { useCoursePaymentContext } from "../../context";
export const PaymentSummary = () => {
  const { coursePaymentInfo } = useCoursePaymentContext();

  const [appliedCoupon] = useState<boolean>(false);

  const discountAmount =
    coursePaymentInfo.price.originalPrice -
    coursePaymentInfo.price.discountedPrice;

  const finalPrice =
    coursePaymentInfo.price.discountedPrice - (appliedCoupon ? 100000 : 0);

  return (
    <div className="flex flex-col gap-4 border-b border-border-subtle pb-4 text-sm">
      <div className="flex justify-between text-text-subtle">
        <span>Giá gốc:</span>
        <span className="text-text-muted line-through">
          {formatVND(coursePaymentInfo.price.originalPrice)}
        </span>
      </div>
      <div className="flex justify-between text-text-subtle">
        <span>Giảm giá khóa học:</span>
        <span className="text-text-discount">-{formatVND(discountAmount)}</span>
      </div>
      {appliedCoupon && (
        <div className="flex justify-between text-text-subtle">
          <span>Voucher áp dụng:</span>
          <span className="text-text-discount">-{formatVND(100000)}</span>
        </div>
      )}
      <div className="flex justify-between border-t border-border-subtle pt-3 text-base font-bold text-text-default">
        <span>Tổng thanh toán:</span>
        <span className="text-text-brand">{formatVND(finalPrice)}</span>
      </div>
    </div>
  );
};
