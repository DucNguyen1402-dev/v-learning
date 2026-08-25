import { usePersonalCoursesContext } from "@modules/personal-courses/contexts";
import { usePersonalCourseDetailContext } from "@modules/personal-courses/personal-course-detail/contexts";
import { Navigation } from "@shared/navigation";

export const CoursePlayerPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  const { courses } = usePersonalCoursesContext();
  const { maKhoaHoc } = usePersonalCourseDetailContext();
  const targetCourse = courses.find((course) => course.maKhoaHoc === maKhoaHoc);

  const { baiHocIndex } = Navigation.hooks.usePayload();
  const lesson = targetCourse!.danhSachBaiHoc[baiHocIndex];

  return (
    <div className="flex-center min-h-screen">
      <div
        className="flex w-full max-w-3xl scroll-target flex-col overflow-y-auto rounded-container border-border-subtle bg-bg-default p-4 shadow-surface lg:p-6"
        ref={scrollRef}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-container border border-border-default shadow-surface">
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src={lesson.videoUrl}
              title={lesson.tenBaiHoc ?? "Course video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col items-start gap-3">
          <span className="rounded-control bg-bg-brand/10 px-2.5 py-1 text-xs font-semibold text-text-brand">
            Đang phát
          </span>
          <h1 className="text-xl font-bold lg:text-xl">{lesson.tenBaiHoc}</h1>
        </div>
      </div>
    </div>
  );
};
