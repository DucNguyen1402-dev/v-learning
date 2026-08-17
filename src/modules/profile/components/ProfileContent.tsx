export const ProfileContent = () => {
  return (
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
    </div>
  );
};
