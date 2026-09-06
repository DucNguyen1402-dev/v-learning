import { api } from "@shared/api";
type PendingEnrollmentCourseResponse = {
  taiKhoan: string;
  biDanh: string;
  hoTen: string;
};
export const getPendingEnrollmentUsers = (maKhoaHoc: string) =>
  api
    .post<PendingEnrollmentCourseResponse[]>(
      `/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
      {
        maKhoaHoc: maKhoaHoc,
      },
    )
    .then((res) => res.data);
