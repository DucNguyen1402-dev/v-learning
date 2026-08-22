import { type Dispatch, type SetStateAction } from "react";

import { usePaginationEffect as usePaginationEffectContext } from "../contexts";
type UsePaginationEffectProps = {
  enabled?: boolean;
  setPagination: Dispatch<SetStateAction<{ page: number; pageSize: number }>>;
  resetDeps?: readonly unknown[];
  currentPage: number;
  totalPages: number;
};
export const usePaginationEffect = ({
  setPagination,
  resetDeps,
  currentPage,
  totalPages,
}: UsePaginationEffectProps) => {
  usePaginationEffectContext({
    setPagination,
    resetDeps,
    currentPage,
    totalPages,
  });
};
