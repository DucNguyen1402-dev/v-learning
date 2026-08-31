import { api } from "@shared/api";
type EnrolledCourseResponse = {
  maKhoaHoc: string;
  tenKhoaHoc: string;
};

export const getEnrolledCourses = (taiKhoan: string) =>
  api
    .post<EnrolledCourseResponse[]>(
      `/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      {
        taiKhoan: taiKhoan,
      },
    )
    .then((res) => res.data);
