import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { AppInteractionLock } from "@shared/overlays";

import { CoursePaymentLeft, CoursePaymentRight } from "../components";
import { useCoursePaymentContext } from "../context";
export const CoursePaymentPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  const { isRegistering } = useCoursePaymentContext();

  const { shouldLockInteraction } = AppInteractionLock.use();

  useEffect(() => {
    shouldLockInteraction(isRegistering);
  }, [isRegistering, shouldLockInteraction]);

  return (
    <div className="min-h-screen px-4 py-8">
      <div
        className="layout-container-sm flex scroll-target flex-col gap-6"
        ref={scrollRef}
      >
        <h1 className="text-center text-2xl font-bold md:text-left">
          Thanh toán khóa học
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
