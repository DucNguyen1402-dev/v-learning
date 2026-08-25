import { Navigation } from "@shared/navigation";
import { ArrowRight } from "lucide-react";

import { FeatureCourseCard } from "./FeatureCourseCard";
export const FeaturedCoursesSection = () => {
  const FEATURED_COURSES = [
    {
      id: "1",
      title: "JavaScript Core & First Principles",
      category: "Frontend",
      lessons: 24,
      duration: "12 giờ",
      level: "Cơ bản",
    },
    {
      id: "2",
      title: "React & TypeScript System Architecture",
      category: "Frontend",
      lessons: 32,
      duration: "18 giờ",
      level: "Nâng cao",
    },
    {
      id: "3",
      title: "Tailwind CSS v4 Workflow & Clean UI",
      category: "UI/UX",
      lessons: 16,
      duration: "8 giờ",
      level: "Trung cấp",
    },
  ];
  return (
    <section className="mx-auto px-6 py-20">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold tracking-tight">
            Khóa học tiêu biểu
          </h2>
          <p className="text-sm text-neutral-700">
            Lộ trình trực tuyến tối ưu, giúp bạn nắm vững gốc rễ và tự tin dựng
            app.
          </p>
        </div>
        <Navigation.components.Go
          routeKey={Navigation.client.keys.COURSES}
          className="group mt-4 flex items-center gap-1 text-sm font-medium text-text-subtle transition-colors hover:text-text-brand"
        >
          <span>Xem tất cả</span>
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Navigation.components.Go>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {FEATURED_COURSES.map((course) => (
          <FeatureCourseCard
            key={course.id}
            category={course.category}
            level={course.level}
            title={course.title}
            lessons={course.lessons}
            duration={course.duration}
          />
        ))}
      </div>
    </section>
  );
};
