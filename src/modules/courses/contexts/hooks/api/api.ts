import type { Courses, PaginatedCourses } from "@modules/courses/types";
import { api } from "@shared/api";

export const getCourse = () =>
  api
    .get<Courses[]>("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
    .then((res) => res.data);

export const getPaginatedCourses = ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) =>
  api
    .get<PaginatedCourses>(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=GP01`,
    )
    .then((res) => res.data);
