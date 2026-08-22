import {
  PaginationControl,
  PaginationInfo,
  PaginationSelect,
} from "./components";
import { PaginationProvider, usePaginationContext } from "./contexts";
import {
  usePaginationActions,
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
    useActions: usePaginationActions,
    useDerived: usePaginationDerived,
  },
  components: {
    Control: PaginationControl,
    Select: PaginationSelect,
    Info: PaginationInfo,
  },
};
