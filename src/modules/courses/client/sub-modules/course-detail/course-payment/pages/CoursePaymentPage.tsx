import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { AppLock } from "@shared/overlays";
import { CreditCard } from "lucide-react";

import { CoursePaymentLeft, CoursePaymentRight } from "../components";
import { useCoursePaymentContext } from "../context";
export const CoursePaymentPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  const { isRegistering } = useCoursePaymentContext();

  const {
    interactionLock: { shouldLockInteraction },
  } = AppLock.use();

  useEffect(() => {
    shouldLockInteraction(isRegistering);
  }, [isRegistering, shouldLockInteraction]);

  return (
    <div className="min-h-screen px-2 py-8 md:px-4">
      <div
        className="layout-container-sm flex scroll-target flex-col gap-6"
        ref={scrollRef}
      >
        <h1 className="flex items-center justify-center gap-2 text-2xl font-bold md:justify-start">
          <CreditCard className="text-text-subtle" />
          <span> Thanh toán khóa học</span>
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="col-span-6">
            <CoursePaymentLeft />
          </div>
          <div className="col-span-6">
            <CoursePaymentRight />
          </div>
        </div>
      </div>
    </div>
  );
};
