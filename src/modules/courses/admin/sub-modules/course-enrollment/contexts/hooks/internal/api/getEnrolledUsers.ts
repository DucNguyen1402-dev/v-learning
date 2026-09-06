import { api } from "@shared/api";
type EnrolledUsersResponse = {
  taiKhoan: string;
  biDanh: string;
  hoTen: string;
};

export const getEnrolledUsers = (maKhoaHoc: string) =>
  api
    .post<EnrolledUsersResponse[]>(
      `/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
      {
        maKhoaHoc: maKhoaHoc,
      },
    )
    .then((res) => res.data);
