interface Course {
  id: string;
  title: string;
  category: string;
  lessons: number;
  duration: string;
  level: string;
}
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useScrollOnRouteChange } from "@shared/navigation";
import { Toast } from "@shared/overlays";

const FEATURED_COURSES: Course[] = [
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

export const HomePage = () => {
  const location = useLocation();
  const { show: showToast } = Toast.use();

  useScrollOnRouteChange();
  useEffect(() => {
    const toastState = location.state?.payload;
    if (!toastState) return;
    showToast(toastState);
  }, [location.state, showToast]);

  return (
    <div className="min-h-screen w-full font-sans">
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-20 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-neutral-800 px-3 py-1 text-xs font-semibold tracking-wider text-neutral-700 uppercase">
            Học lập trình theo tư duy hệ thống
          </span>
          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Nắm vững bản chất. <br />
            Xây dựng ứng dụng thực tế.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Nền tảng học tập tập trung vào First Principles, giúp bạn đi sâu vào
            cơ chế cốt lõi của công nghệ thay vì chỉ học thuộc cú pháp.
          </p>
          <div className="flex flex-col justify-start gap-4 sm:flex-row">
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-md bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
            >
              Khám phá khóa học
            </a>
            <a
              href="#roadmap"
              className="hover: inline-flex items-center justify-center rounded-md border border-neutral-800 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-900"
            >
              Xem lộ trình
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-neutral-800/80 bg-neutral-900/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <div className="mb-1 text-3xl font-bold">100%</div>
            <div className="text-xs text-neutral-700">Thực hành thực tế</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold">50+</div>
            <div className="text-xs text-neutral-700">Bài học chuyên sâu</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold">24/7</div>
            <div className="text-xs text-neutral-700">Hỗ trợ cộng đồng</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold">Clean</div>
            <div className="text-xs text-neutral-700">Code & Architecture</div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
              Khóa học tiêu biểu
            </h2>
            <p className="text-sm text-neutral-700">
              Được thiết kế tinh gọn, tập trung vào bản chất vấn đề.
            </p>
          </div>
          <a
            href="#"
            className="hover: mt-4 text-sm font-medium text-neutral-700 transition-colors md:mt-0"
          >
            Xem tất cả &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED_COURSES.map((course) => (
            <article
              key={course.id}
              className="group flex flex-col justify-between rounded-lg border border-neutral-800 bg-neutral-900/40 p-6 transition-all hover:border-neutral-700"
            >
              <div>
                <div className="mb-4 flex items-center justify-between text-xs text-neutral-700">
                  <span className="rounded bg-neutral-800 px-2 py-0.5 font-mono text-neutral-300">
                    {course.category}
                  </span>
                  <span>{course.level}</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold group-hover:text-neutral-200">
                  {course.title}
                </h3>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-800/60 pt-6 text-xs text-neutral-700">
                <span>{course.lessons} bài học</span>
                <span>{course.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
