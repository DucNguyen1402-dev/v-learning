import { Skeleton } from "@shared/ui";

import { useCourseDetailContext } from "../../contexts";

type CourseDetailImageProps = Readonly<{
  image: string;
}>;

export const CourseDetailImage = ({ image }: CourseDetailImageProps) => {
  const { isPending } = useCourseDetailContext();

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-overlay shadow-surface lg:aspect-auto lg:h-full">
      {isPending ? (
        <div className="absolute inset-0">
          <Skeleton fullWidth size={{ height: "100%" }} radius="none" />
        </div>
      ) : (
        <img
          src={image}
          alt="ReactJS Từ Cơ Bản Đến Nâng Cao"
          className="object-fit absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
};
