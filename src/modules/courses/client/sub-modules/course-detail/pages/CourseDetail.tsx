import { Navigation } from "@shared/navigation";

import { CourseDetailLeft, CourseDetailRight } from "../components";

export const CourseDetail = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  return (
    <div className="min-h-screen p-2 lg:p-8">
      <div
        ref={scrollRef}
        className="grid scroll-target grid-cols-1 gap-2 md:grid-cols-12 lg:grid-cols-3 lg:gap-4"
      >
        <div className="md:col-span-7 lg:col-span-2">
          <CourseDetailLeft />
        </div>
        <div className="flex md:col-span-5 lg:col-span-1">
          <CourseDetailRight />
        </div>
      </div>
    </div>
  );
};
