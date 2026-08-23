import { CoursePrice } from "./CoursePrice";
import { PromotionBadge } from "./PromotionBadge";
import { PromotionCountdown } from "./PromotionCountdown";
import { PromotionList } from "./PromotionList";
import { RegistrationCTA } from "./RegistrationCTA";
import { RemainingSeats } from "./RemainingSeats";
export const CourseDetailRight = () => {
  return (
    <div className="shadow-container flex flex-col rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface">
      <div className="self-start">
        <PromotionBadge />
      </div>
      <div className="mt-5">
        <CoursePrice originalPrice={2500000} discountedPrice={1490000} />
      </div>
      <div className="mt-5">
        <PromotionCountdown deadlineHours={24} />
      </div>
      <div className="mt-4">
        <RemainingSeats totalSeats={30} remainingSeats={5} />
      </div>
      <div className="mt-10">
        <RegistrationCTA
          onRegister={() => console.log("Register button clicked")}
        />
      </div>
      <div className="mt-5">
        <PromotionList />
      </div>
    </div>
  );
};
