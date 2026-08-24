import type { EnrichedPersonalCourse } from "@modules/personal-courses/types";
import { Navigation } from "@shared/navigation";
import { ArrowRight, Star } from "lucide-react";

export const CourseCard = ({ course }: { course: EnrichedPersonalCourse }) => {
  return (
    <article className="group overflow-hidden rounded-container border-border-default bg-bg-default shadow-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-surface-hover">
      <div className="relative overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.tenKhoaHoc}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="flex items-center gap-1 rounded-pill bg-bg-overlay px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <span className="text-text-on-overlay">{course.danhGia}</span>
            <Star className="size-3 fill-current text-text-rating" />
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="line-clamp-1 text-lg font-bold transition-colors duration-200 group-hover:text-text-brand">
          {course.tenKhoaHoc}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-text-subtle">
          {course.moTa}
        </p>

        <div className="mt-8 flex items-center justify-end pt-1">
          <Navigation.components.ForwardWithParam
            routeBuilderKey={
              Navigation.client.buildersKeys.PERSONAL_COURSE_DETAIL
            }
            param={course.maKhoaHoc}
            className="group/inner flex items-center gap-1 text-sm text-text-subtle transition-colors duration-200 hover:text-text-brand"
          >
            <span>Chi tiết</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover/inner:translate-x-1" />
          </Navigation.components.ForwardWithParam>
        </div>
      </div>
    </article>
  );
};
