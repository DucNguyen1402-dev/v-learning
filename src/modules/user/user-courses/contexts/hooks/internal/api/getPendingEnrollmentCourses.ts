import type { PendingEnrollmentCoursePayload } from "@modules/user/user-courses/types";
import { api } from "@shared/api";
export const getPendingEnrollmentCourses = (taiKhoan: string) =>
  api
    .post<PendingEnrollmentCoursePayload[]>(
      `/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      {
        taiKhoan: taiKhoan,
      },
    )
    .then((res) => res.data);
