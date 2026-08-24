import { useState } from "react";

import { useCourseDetailContext } from "@modules/courses/course-detail/contexts";
import { formatVND } from "@shared/utils";
export const PaymentSummary = () => {
  const { courseDetail } = useCourseDetailContext();

  const [appliedCoupon] = useState<boolean>(false);

  const discountAmount =
    courseDetail.price.originalPrice - courseDetail.price.discountedPrice;

  const finalPrice =
    courseDetail.price.discountedPrice - (appliedCoupon ? 100000 : 0);

  return (
    <div className="flex flex-col gap-4 border-b border-border-subtle pb-4 text-sm">
      <div className="flex justify-between text-text-subtle">
        <span>Giá gốc:</span>
        <span className="text-text-muted line-through">
          {formatVND(courseDetail.price.originalPrice)}
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
