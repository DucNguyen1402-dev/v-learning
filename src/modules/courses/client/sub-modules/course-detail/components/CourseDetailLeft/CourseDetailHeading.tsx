type CourseDetailHeadingProps = Readonly<{
  readonly tenKhoaHoc: string;
  readonly tenDanhMucKhoaHoc: string;
}>;
export const CourseDetailHeading = ({
  tenKhoaHoc,
  tenDanhMucKhoaHoc,
}: CourseDetailHeadingProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">{tenKhoaHoc}</h1>
      <p className="text-sm font-semibold text-text-subtle">
        {tenDanhMucKhoaHoc}
      </p>
    </div>
  );
};
