import { useState } from "react";

import { Skeleton } from "@shared/ui";

export const PersonalCourseImage = ({
  image,
  tenKhoaHoc,
}: {
  image: string;
  tenKhoaHoc: string;
}) => {
  const [loadedImage, setLoadedImage] = useState<string | null>(null);
  const isImageLoaded = loadedImage === image;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-overlay shadow-surface lg:aspect-auto lg:h-full">
      <img
        src={image}
        alt={tenKhoaHoc}
        onLoad={() => setLoadedImage(image)}
        onError={() => setLoadedImage(image)}
        className="object-fit absolute inset-0 h-full w-full"
      />
      {!isImageLoaded && (
        <div className="absolute inset-0">
          <Skeleton fullWidth size={{ height: "100%" }} radius="none" />
        </div>
      )}
    </div>
  );
};
