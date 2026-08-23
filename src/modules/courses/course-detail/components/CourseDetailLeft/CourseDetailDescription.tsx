export const CourseDetailDescription = ({ moTa }: { moTa: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="border-b border-border-subtle pb-3 text-lg font-semibold select-none">
        Mô tả khóa học
      </h3>
      <p className="text-sm leading-relaxed text-text-subtle">{moTa}</p>
    </div>
  );
};
