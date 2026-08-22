import type { PaginatedCourse } from "@modules/courses/types";
import { api } from "@shared/api";
import axios from "axios";
type GetPaginatedCourseParams = {
  tenKhoaHoc: string;
  page: number;
  pageSize: number;
};

export const getPaginatedCourse = async ({
  page,
  pageSize,
  tenKhoaHoc,
}: GetPaginatedCourseParams): Promise<PaginatedCourse> => {
  try {
    const res = await api.get<PaginatedCourse>(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=GP01&tenKhoaHoc=${tenKhoaHoc ?? ""}`,
    );

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        currentPage: page,
        count: 0,
        totalPages: 0,
        totalCount: 0,
        items: [],
      };
    }
    throw error;
  }
};
