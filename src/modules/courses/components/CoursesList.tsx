export const CoursesList = () => {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 space-y-8 border-t border-border-subtle px-6 py-10">
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
    </div>
  );
};
