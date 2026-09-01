import type { UnenrolledUserResponse } from "@modules/courses/admin/enroll-user/types";
import { api } from "@shared/api";

export const getUnenrolledUsers = ({ maKhoaHoc }: { maKhoaHoc: string }) =>
  api
    .post<UnenrolledUserResponse[]>(
      "/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
      {
        maKhoaHoc,
      },
    )
    .then((res) => res.data);
