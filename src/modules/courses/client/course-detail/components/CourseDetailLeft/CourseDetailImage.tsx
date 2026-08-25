export const CourseDetailImage = ({ image }: { image: string }) => {
  return (
    <div className="w-full overflow-hidden rounded-overlay shadow-surface">
      <img
        src={image}
        alt="ReactJS Từ Cơ Bản Đến Nâng Cao"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
