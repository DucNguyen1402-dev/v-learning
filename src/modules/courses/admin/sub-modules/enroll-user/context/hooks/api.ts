import { api } from "@shared/api";

import type { UnenrolledUserResponse } from "../../types";

export const getUnenrolledUsers = ({ maKhoaHoc }: { maKhoaHoc: string }) =>
  api
    .post<UnenrolledUserResponse[]>(
      "/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
      {
        maKhoaHoc,
      },
    )
    .then((res) => res.data);
