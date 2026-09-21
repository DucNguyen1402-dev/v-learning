import { Skeleton } from "@shared/ui";

import { useCourseDetailContext } from "../../contexts";

export const CourseDetailImage = ({ image }: { image: string }) => {
  const { isPending } = useCourseDetailContext();

  return (
    <div className="aspect-video w-full overflow-hidden rounded-overlay shadow-surface lg:aspect-auto lg:h-full">
      {isPending ? (
        <Skeleton fullWidth size={{ height: "100%" }} radius="none" />
      ) : (
        <img
          src={image}
          alt="ReactJS Từ Cơ Bản Đến Nâng Cao"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};
