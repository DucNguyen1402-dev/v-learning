export const CoursePaymentInfo = () => {
  const course = {
    title: "Lập trình Frontend Chuyên Nghiệp từ Zero đến Hero",
    instructor: "Nguyễn Văn B",
    originalPrice: 1200000,
    discount: 400000,
    code: "HOCHOC12345",
  };

  return (
    <div className="mb-4 flex gap-4 border-b border-slate-100 pb-4">
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-slate-200 text-[10px] font-bold text-slate-500">
        THUMBNAIL
      </div>
      <div>
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
          {course.title}
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Giảng viên: {course.instructor}
        </p>
      </div>
    </div>
  );
};
