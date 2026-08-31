import type { PendingEnrollmentCourse } from "@modules/user/user-courses/types";
import { api } from "@shared/api";
export const getPendingEnrollmentCourses = (taiKhoan: string) =>
  api
    .post<PendingEnrollmentCourse[]>(
      `/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      {
        taiKhoan: taiKhoan,
      },
    )
    .then((res) => res.data);
