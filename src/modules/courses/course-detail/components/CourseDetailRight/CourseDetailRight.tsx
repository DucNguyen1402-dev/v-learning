import { useCourseDetailContext } from "@modules/courses/course-detail/contexts";

import { CoursePrice } from "./CoursePrice";
import { PromotionBadge } from "./PromotionBadge";
import { PromotionCountdown } from "./PromotionCountdown";
import { PromotionList } from "./PromotionList";
import { RegistrationCTA } from "./RegistrationCTA";
import { RemainingSeats } from "./RemainingSeats";

export const CourseDetailRight = () => {
  const { courseDetail } = useCourseDetailContext();
  const hasPromotion = courseDetail.hasPromotion;
  return (
    <div className="shadow-container flex flex-col rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface">
      {hasPromotion && (
        <div className="mb-5 self-start">
          <PromotionBadge />
        </div>
      )}
      <div className="mt-5">
        <CoursePrice
          originalPrice={courseDetail.price.originalPrice}
          discountedPrice={courseDetail.price.discountedPrice}
        />
      </div>
      {hasPromotion && (
        <div className="mt-5">
          <PromotionCountdown deadlineHours={courseDetail.deadlineHours} />
        </div>
      )}
      <div className={hasPromotion ? "mt-5" : "mt-10"}>
        <RemainingSeats
          totalSeats={courseDetail.seat.totalSeats}
          remainingSeats={courseDetail.seat.remainingSeats}
        />
      </div>
      <div className="mt-10">
        <RegistrationCTA maKhoaHoc={courseDetail.maKhoaHoc} />
      </div>
      <div className="mt-5">
        <PromotionList />
      </div>
    </div>
  );
};
