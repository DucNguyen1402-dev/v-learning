import { api } from "@shared/api";

export type PendingEnrollmentCourseResponse = {
  maKhoaHoc: string;
  tenKhoaHoc: string;
};

export const getPendingEnrollmentCourses = (taiKhoan: string) =>
  api
    .post<PendingEnrollmentCourseResponse[]>(
      `/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      {
        taiKhoan: taiKhoan,
      },
    )
    .then((res) => res.data);
