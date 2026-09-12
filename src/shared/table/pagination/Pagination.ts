import {
  PaginationControl,
  PaginationInfo,
  PaginationSelect,
} from "./components";
import { PaginationProvider, usePaginationContext } from "./contexts";
import {
  usePagination,
  usePaginationDerived,
  usePaginationEffect,
  usePaginationState,
} from "./hooks";

export const Pagination = {
  Provider: PaginationProvider,
  use: usePaginationContext,
  hooks: {
    useEffect: usePaginationEffect,
    useState: usePaginationState,
    useDerived: usePaginationDerived,
    usePagination: usePagination,
  },
  components: {
    Control: PaginationControl,
    Select: PaginationSelect,
    Info: PaginationInfo,
  },
};
