import { useParams } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CourseDetailLeft, CourseDetailRight } from "../components";
import { CourseDetailProvider } from "../contexts";

export const CourseDetail = () => {
  Navigation.hooks.useScrollOnRouteChange();

  const { maKhoaHoc } = useParams<{ maKhoaHoc: string }>();
  return (
    <CourseDetailProvider maKhoaHoc={maKhoaHoc!}>
      <div className="min-h-screen">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:pt-8">
          <div className="col-span-2">
            <CourseDetailLeft />
          </div>
          <CourseDetailRight />
        </div>
      </div>
    </CourseDetailProvider>
  );
};
