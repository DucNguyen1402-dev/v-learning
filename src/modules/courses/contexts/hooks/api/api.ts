import type { PaginatedCourse } from "@modules/courses/types";
import { api } from "@shared/api";

export const getPaginatedCourse = ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) =>
  api
    .get<PaginatedCourse>(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=GP01`,
    )
    .then((res) => res.data);
