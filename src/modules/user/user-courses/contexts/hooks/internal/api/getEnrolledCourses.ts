import type { EnrolledCoursePayload } from "@modules/user/user-courses/types";
import { api } from "@shared/api";
export const getEnrolledCourses = (taiKhoan: string) =>
  api
    .post<EnrolledCoursePayload[]>(
      `/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      {
        taiKhoan: taiKhoan,
      },
    )
    .then((res) => res.data);
