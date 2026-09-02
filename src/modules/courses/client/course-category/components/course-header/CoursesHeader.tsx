import { useState } from "react";
import { useParams } from "react-router-dom";

import { Button, BUTTON_SIZES } from "@shared/ui";

import { COURSE_CATEGORY_META } from "./config";

import type { Category } from "@/modules/courses/shared/types";

export const CoursesHeader = () => {
  const { maDanhMuc } = useParams<{ maDanhMuc: Category }>();

  const { title, description } = COURSE_CATEGORY_META[maDanhMuc!];
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex max-w-2xl flex-col gap-3 select-none">
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>

      <div className="text-sm leading-relaxed text-text-subtle md:text-base">
        <p className={!isExpanded ? "line-clamp-3 md:line-clamp-2" : ""}>
          {description}
        </p>
        <Button
          size={BUTTON_SIZES.NONE}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="size-sm text-text-action hover:underline">
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </span>
        </Button>
      </div>
    </div>
  );
};
