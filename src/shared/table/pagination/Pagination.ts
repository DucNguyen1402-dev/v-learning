import {
  PaginationControl,
  PaginationInfo,
  PaginationSelect,
} from "./components";
import { PaginationProvider, usePaginationContext } from "./contexts";
import { usePagination } from "./hooks";

export const Pagination = {
  Provider: PaginationProvider,
  use: usePaginationContext,
  hooks: {
    usePagination,
  },
  components: {
    Control: PaginationControl,
    Select: PaginationSelect,
    Info: PaginationInfo,
  },
};
