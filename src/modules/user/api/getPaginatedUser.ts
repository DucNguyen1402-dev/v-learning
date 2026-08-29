import { api } from "@shared/api";

import type { PaginatedUser } from "../types";

type GetPaginatedUserParams = {
  tuKhoa: string;
  page: number;
  pageSize: number;
};

export const getPaginatedUser = async ({
  page,
  pageSize,
  tuKhoa = "",
}: GetPaginatedUserParams): Promise<PaginatedUser[]> =>
  api.get(
    `/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&page=${page}&pageSize=${pageSize}`,
  );
