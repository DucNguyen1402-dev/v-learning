export const ProfilePage = () => {
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
            <a
              href="#courses"
              className="transition-colors hover:text-neutral-900"
            >
              Khóa học của tôi
            </a>
            <a
              href="#settings"
              className="transition-colors hover:text-neutral-900"
            >
              Cài đặt
            </a>
          </nav>
          <button className="text-xs font-medium text-red-600 transition-colors hover:text-red-700">
            Đăng xuất
          </button>
        </div>
      </header>

      {/* 2. Main Content Layout */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <div className="grid items-start gap-8 md:grid-cols-3">
          {/* Left Column: User Sidebar */}
          <div className="space-y-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-xs">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-2xl font-bold text-neutral-500">
                DN
              </div>
              <h1 className="text-lg font-bold text-neutral-900">Duc Nguyen</h1>
              <p className="mt-0.5 font-mono text-xs text-neutral-500">
                duc.nguyen@example.com
              </p>
              <span className="mt-3 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700">
                Học viên
              </span>
            </div>

            <div className="space-y-3 border-t border-neutral-100 pt-4 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Tham gia:</span>
                <span className="font-medium text-neutral-900">
                  Tháng 03, 2026
                </span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Khóa học đã đăng ký:</span>
                <span className="font-medium text-neutral-900">3</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Bài học hoàn thành:</span>
                <span className="font-medium text-neutral-900">24/72</span>
              </div>
            </div>

            <button className="w-full rounded-md bg-neutral-900 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800">
              Chỉnh sửa hồ sơ
            </button>
          </div>

          {/* Right Column: Main Content / Tabs */}
          <div className="space-y-8 md:col-span-2">
            {/* Section 1: Enrolled Courses */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-neutral-900">
                  Khóa học đang theo học
                </h2>
                <a
                  href="#all"
                  className="text-xs text-neutral-500 hover:text-neutral-900"
                >
                  Xem tất cả
                </a>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "JavaScript Core & First Principles",
                    progress: 75,
                    category: "Frontend",
                  },
                  {
                    title: "React & TypeScript System Architecture",
                    progress: 40,
                    category: "Frontend",
                  },
                  {
                    title: "Tailwind CSS v4 Workflow",
                    progress: 10,
                    category: "UI/UX",
                  },
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 sm:flex-row sm:items-center"
                  >
                    <div className="space-y-1">
                      <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600 uppercase">
                        {course.category}
                      </span>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {course.title}
                      </h3>
                    </div>

                    <div className="w-full space-y-1.5 sm:w-48">
                      <div className="flex justify-between text-[11px] text-neutral-500">
                        <span>Tiến độ</span>
                        <span className="font-mono text-neutral-900">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full border border-neutral-200/50 bg-neutral-100">
                        <div
                          className="h-full rounded-full bg-neutral-900"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Account Settings Quick View */}
            <div className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-bold text-neutral-900">
                Thông tin cá nhân
              </h2>

              <div className="grid gap-4 text-xs sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-neutral-500">
                    Họ và tên
                  </label>
                  <div className="rounded-md border border-neutral-200 bg-neutral-50 p-2.5 font-medium text-neutral-900">
                    Duc Nguyen
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-neutral-500">Email</label>
                  <div className="rounded-md border border-neutral-200 bg-neutral-50 p-2.5 font-medium text-neutral-900">
                    duc.nguyen@example.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="border-t border-neutral-200/80 px-6 py-6 text-center text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} V-learning. Mọi quyền được bảo lưu.
      </footer>
    </div>
  );
};
