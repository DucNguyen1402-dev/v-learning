export const PersonalCourseImage = ({
  image,
  tenKhoaHoc,
}: {
  image: string;
  tenKhoaHoc: string;
}) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-overlay shadow-surface">
      <img
        src={image}
        alt={tenKhoaHoc}
        className="h-full w-full object-cover"
      />
    </div>
  );
};
