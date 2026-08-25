import { useCourseDetailContext } from "@modules/courses/client/course-detail/contexts";
export const CoursePaymentInfo = () => {
  const { courseDetail } = useCourseDetailContext();
  return (
    <div className="flex gap-4 border-b border-border-subtle pb-4">
      <div className="h-20 w-32 shrink-0 overflow-hidden rounded-overlay">
        <img
          src={courseDetail.thumbnail}
          alt={courseDetail.tenKhoaHoc}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="line-clamp-2 text-sm font-semibold">
          {courseDetail.tenKhoaHoc}
        </h3>
        <p className="text-xs text-text-subtle">
          Giảng viên: {courseDetail.tenGiangVien}
        </p>
      </div>
    </div>
  );
};
