export type PaginatedUser = {
  readonly taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  readonly tenLoaiNguoiDung: string;
  readonly maLoaiNguoiDung: string;
  readonly maNhom: string | null;
};

export type PaginatedUserResponse = {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: PaginatedUser[];
};
