import { useRef } from "react";

import { useScrollIntoView } from "@shared/table/hooks";

import { useUserDeletion } from "./useUserDeletion";
type UseUserTableRowProps = {
  taiKhoan: string;
  isRecentlyAffected: boolean;
};
export const useUserTableRow = ({
  taiKhoan,
  isRecentlyAffected,
}: UseUserTableRowProps) => {
  const { onDeleteClick, targetUserDeletion } = useUserDeletion({ taiKhoan });

  const rowRef = useRef<HTMLTableRowElement | null>(null);

  useScrollIntoView({
    ref: rowRef,
    enabled: isRecentlyAffected,
  });
  return {
    onDeleteClick,
    targetUserDeletion,
    rowRef,
  };
};
