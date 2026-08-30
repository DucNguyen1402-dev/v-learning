import { api } from "@shared/api";

import type { PaginatedUserResponse } from "../types";

type GetPaginatedUserParams = {
  tuKhoa: string;
  page: number;
  pageSize: number;
};

export const getPaginatedUsers = async ({
  page,
  pageSize,
  tuKhoa = "",
}: GetPaginatedUserParams): Promise<PaginatedUserResponse> =>
  api
    .get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01${tuKhoa ? `&tuKhoa=${tuKhoa}` : ""}&page=${page}&pageSize=${pageSize}`,
    )
    .then((response) => response.data);
