import { useNavigate } from "react-router-dom";

import type { CurrentUser } from "@shared/auth";
import { clearAuthSession, getCurrentUser } from "@shared/auth";
import { CircleUser } from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  lessons: number;
  duration: string;
  level: string;
}

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

const HomePage = () => {
  const navigate = useNavigate();
  const currentUser: null | CurrentUser = getCurrentUser();

  const onLogoutCLick = () => {
    clearAuthSession();
    navigate("/client/login");
  };

  const onLoginClick = () => navigate("/client/login");

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100 selection:bg-neutral-800 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            V-learning<span className="text-neutral-500">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-400 md:flex">
            <a href="#courses" className="transition-colors hover:text-white">
              Khóa học
            </a>
            <a href="#roadmap" className="transition-colors hover:text-white">
              Lộ trình
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              Giới thiệu
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <div className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 transition hover:bg-gray-100">
                  <CircleUser />
                  <span className="text-sm font-medium text-gray-700">
                    {currentUser.taiKhoan}
                  </span>
                </div>
                <button
                  onClick={onLogoutCLick}
                  className="rounded-md bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
                >
                  Đăng Xuất
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="px-3 py-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              >
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-neutral-800 px-3 py-1 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            Học lập trình theo tư duy hệ thống
          </span>
          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nắm vững bản chất. <br />
            Xây dựng ứng dụng thực tế.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
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
              className="inline-flex items-center justify-center rounded-md border border-neutral-800 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-white"
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
            <div className="mb-1 text-3xl font-bold text-white">100%</div>
            <div className="text-xs text-neutral-400">Thực hành thực tế</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-white">50+</div>
            <div className="text-xs text-neutral-400">Bài học chuyên sâu</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-white">24/7</div>
            <div className="text-xs text-neutral-400">Hỗ trợ cộng đồng</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-white">Clean</div>
            <div className="text-xs text-neutral-400">Code & Architecture</div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Khóa học tiêu biểu
            </h2>
            <p className="text-sm text-neutral-400">
              Được thiết kế tinh gọn, tập trung vào bản chất vấn đề.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 text-sm font-medium text-neutral-400 transition-colors hover:text-white md:mt-0"
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
                <div className="mb-4 flex items-center justify-between text-xs text-neutral-400">
                  <span className="rounded bg-neutral-800 px-2 py-0.5 font-mono text-neutral-300">
                    {course.category}
                  </span>
                  <span>{course.level}</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white group-hover:text-neutral-200">
                  {course.title}
                </h3>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-800/60 pt-6 text-xs text-neutral-400">
                <span>{course.lessons} bài học</span>
                <span>{course.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-xs text-neutral-500 md:flex-row">
          <div>
            &copy; {new Date().getFullYear()} V-learning. Mọi quyền được bảo
            lưu.
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-neutral-400">
              Điều khoản
            </a>
            <a href="#" className="transition-colors hover:text-neutral-400">
              Bảo mật
            </a>
            <a href="#" className="transition-colors hover:text-neutral-400">
              Liên hệ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
