import { api } from "@shared/api";

export const getEnrolledCourses = (taiKhoan: string) =>
  api
    .get(`/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet/${taiKhoan}`)
    .then((res) => res.data);
