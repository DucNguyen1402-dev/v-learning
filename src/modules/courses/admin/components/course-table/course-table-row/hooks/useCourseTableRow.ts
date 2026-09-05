import { useRef } from "react";

import { useScrollIntoView } from "@shared/table/hooks";

import { useCourseDeletion } from "./useCourseDeletion";
type UseCourseTableRowProps = {
  tenKhoaHoc: string;
  isRecentlyAffected: boolean;
};
export const useCourseTableRow = ({
  tenKhoaHoc,
  isRecentlyAffected,
}: UseCourseTableRowProps) => {
  const { onDeleteClick, targetCourseDeletion } = useCourseDeletion({
    tenKhoaHoc,
  });

  const courseItemRef = useRef<HTMLTableRowElement | null>(null);

  useScrollIntoView({
    enabled: isRecentlyAffected,
    ref: courseItemRef,
  });

  return { onDeleteClick, targetCourseDeletion, courseItemRef };
};
