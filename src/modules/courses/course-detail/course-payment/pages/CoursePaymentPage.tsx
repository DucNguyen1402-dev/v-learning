import { Navigation } from "@shared/navigation";

import { CoursePaymentLeft, CoursePaymentRight } from "../components";
export const CoursePaymentPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="flex scroll-target flex-col gap-6" ref={scrollRef}>
        <h1 className="text-2xl font-bold">Thanh toán khóa học</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <CoursePaymentLeft />
          </div>
          <div className="md:col-span-5">
            <CoursePaymentRight />
          </div>
        </div>
      </div>
    </div>
  );
};
