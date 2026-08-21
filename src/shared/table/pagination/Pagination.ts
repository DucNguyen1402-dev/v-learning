import {
  PaginationControl,
  PaginationControlApi,
  PaginationSelect,
} from "./components";
import { PaginationProvider, usePaginationContext } from "./contexts";

export const Pagination = {
  Provider: PaginationProvider,
  use: usePaginationContext,
  Control: PaginationControl,
  ControlApi: PaginationControlApi,
  Select: PaginationSelect,
};
