import { useFeatureCourses } from "@modules/home/hooks";
import { Navigation } from "@shared/navigation";
import { ArrowRight } from "lucide-react";

import { FeatureCourseCard } from "./FeatureCourseCard";
export const FeaturedCoursesSection = () => {
  const { highestRatingCourses } = useFeatureCourses();

  return (
    <section className="mx-auto px-2 py-20 select-none lg:px-6">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
            Khóa học tiêu biểu
          </h2>
          <p className="text-sm text-text-subtle lg:text-base">
            Lộ trình trực tuyến tối ưu, giúp bạn nắm vững gốc rễ và tự tin dựng
            app.
          </p>
        </div>
        <Navigation.components.Go
          routeKey={Navigation.client.keys.COURSES}
          className="group mt-4 flex items-center gap-1 self-end text-sm font-medium text-text-subtle transition-colors hover:text-text-brand"
        >
          <span>Xem tất cả</span>
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1 lg:size-4" />
        </Navigation.components.Go>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highestRatingCourses?.map((course) => (
          <FeatureCourseCard
            key={course.maKhoaHoc}
            tenKhoaHoc={course.tenKhoaHoc}
            maKhoahoc={course.maKhoaHoc}
            tenDanhMucKhoaHoc={course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
            soLuongHocVien={course.soLuongHocVien}
            danhGia={course.danhGia}
            luotXem={course.luotXem}
            thumbnail={course.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};
