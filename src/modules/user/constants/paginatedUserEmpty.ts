import type { PaginatedUserResponse } from "../types";
export const PAGINATED_USER_EMPTY: PaginatedUserResponse = {
  currentPage: 0,
  count: 0,
  totalPages: 0,
  totalCount: 0,
  items: [
    {
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDT: "",
      tenLoaiNguoiDung: "",
      maLoaiNguoiDung: "",
      maNhom: null,
    },
  ],
};
