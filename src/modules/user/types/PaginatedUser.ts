export type PaginatedUser = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  tenLoaiNguoiDung: string;
  maLoaiNguoiDung: string;
  maNhom: string | null;
};

export type PaginatedUserResponse = {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: PaginatedUser[];
};
