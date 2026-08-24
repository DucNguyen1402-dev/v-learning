import { Navigation } from "@shared/navigation";

import { CoursePaymentLeft, CoursePaymentRight } from "../components";
export const CoursePaymentPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  return (
    <div className="min-h-screen px-4 py-8">
      <div
        className="layout-container-sm flex scroll-target flex-col gap-6"
        ref={scrollRef}
      >
        <h1 className="text-2xl font-bold">Thanh toán khóa học</h1>

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
