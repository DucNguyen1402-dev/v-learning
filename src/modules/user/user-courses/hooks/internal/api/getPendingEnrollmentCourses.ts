import { api } from "@shared/api";

export const getPendingEnrollmentCourses = (taiKhoan: string) =>
  api
    .get(`/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet/${taiKhoan}`)
    .then((res) => res.data);
