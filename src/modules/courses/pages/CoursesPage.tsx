export const CoursesPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 font-sans text-neutral-900 selection:bg-neutral-200 selection:text-neutral-900">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-neutral-900"
          >
            V-learning<span className="text-neutral-400">.</span>
          </a>
          <nav className="hidden gap-6 text-sm text-neutral-600 sm:flex">
            <a href="#courses" className="font-medium text-neutral-900">
              Khóa học
            </a>
            <a
              href="#blogs"
              className="transition-colors hover:text-neutral-900"
            >
              Bài viết
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-neutral-900"
            >
              Giới thiệu
            </a>
          </nav>
          <a
            href="#profile"
            className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Tài khoản
          </a>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="mx-auto w-full max-w-6xl flex-1 space-y-8 px-6 py-10">
        {/* Title Header */}
        <div className="max-w-xl">
          <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
            Danh mục đào tạo
          </span>
          <h1 className="mt-2 mb-3 text-3xl font-bold text-neutral-900">
            Tất cả khóa học
          </h1>
          <p className="text-sm leading-relaxed text-neutral-600">
            Lộ trình học tập tập trung vào First Principles, giúp làm chủ tư duy
            lập trình và kiến trúc hệ thống.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col items-stretch justify-between gap-4 border-b border-neutral-200 pb-6 sm:flex-row sm:items-center">
          {/* Categories */}
          <div className="flex scrollbar-none gap-2 overflow-x-auto pb-2 text-xs sm:pb-0">
            {["Tất cả", "Frontend", "Backend", "Architecture", "UI/UX"].map(
              (cat, idx) => (
                <button
                  key={idx}
                  className={`rounded-md px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
                    idx === 0
                      ? "bg-neutral-900 text-white"
                      : "border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              className="w-full rounded-md border border-neutral-200 bg-white py-1.5 pr-3 pl-8 text-xs text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-400 focus:outline-none"
            />
            <svg
              className="absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Courses Grid (3 Columns) */}
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "JavaScript Core & First Principles",
              category: "Frontend",
              lessons: 24,
              duration: "12 giờ",
              level: "Cơ bản",
              desc: "Đào sâu cơ chế hoạt động cốt lõi của JS Engine, Call Stack và Memory Model.",
            },
            {
              title: "React & TypeScript System Architecture",
              category: "Architecture",
              lessons: 32,
              duration: "18 giờ",
              level: "Nâng cao",
              desc: "Thiết kế hệ thống component có khả năng mở rộng và quản lý state phức tạp.",
            },
            {
              title: "Tailwind CSS v4 Workflow & Clean UI",
              category: "UI/UX",
              lessons: 16,
              duration: "8 giờ",
              level: "Trung cấp",
              desc: "Làm chủ tư duy dựng layout tối giản, chuẩn hóa hệ thống Design System.",
            },
            {
              title: "Node.js Core & Microservices Baseline",
              category: "Backend",
              lessons: 28,
              duration: "15 giờ",
              level: "Trung cấp",
              desc: "Xây dựng RESTful API chuẩn mực, tối ưu I/O performance và bảo mật.",
            },
            {
              title: "Clean Code & Refactoring Practices",
              category: "Architecture",
              lessons: 20,
              duration: "10 giờ",
              level: "Nâng cao",
              desc: "Tối ưu hóa mã nguồn sẵn có, áp dụng Design Patterns thực tế.",
            },
            {
              title: "HTML/CSS First Principles for Devs",
              category: "Frontend",
              lessons: 18,
              duration: "9 giờ",
              level: "Cơ bản",
              desc: "Nắm vững Box Model, Flexbox, Grid và cơ chế Render của Trình duyệt.",
            },
          ].map((course, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500">
                  <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-neutral-700">
                    {course.category}
                  </span>
                  <span>{course.level}</span>
                </div>

                <h3 className="cursor-pointer text-base leading-snug font-semibold text-neutral-900 hover:underline">
                  {course.title}
                </h3>

                <p className="text-xs leading-relaxed text-neutral-600">
                  {course.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 font-mono text-[11px] text-neutral-500">
                <span>{course.lessons} bài học</span>
                <span>{course.duration}</span>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* 3. Footer */}
      <footer className="border-t border-neutral-200/80 px-6 py-6 text-center text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} V-learning. Mọi quyền được bảo lưu.
      </footer>
    </div>
  );
};
