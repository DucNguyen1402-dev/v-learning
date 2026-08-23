import { Navigation } from "@shared/navigation";

import { CourseDetailLeft, CourseDetailRight } from "../components";
import { CourseDetailProvider } from "../contexts";

export const CourseDetail = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  const { maKhoaHoc } = Navigation.hooks.useParams();

  return (
    <CourseDetailProvider maKhoaHoc={maKhoaHoc as string}>
      <div className="min-h-screen p-8">
        <div
          ref={scrollRef}
          className="grid scroll-target grid-cols-1 gap-4 md:grid-cols-3"
        >
          <div className="col-span-2">
            <CourseDetailLeft />
          </div>
          <CourseDetailRight />
        </div>
      </div>
    </CourseDetailProvider>
  );
};
