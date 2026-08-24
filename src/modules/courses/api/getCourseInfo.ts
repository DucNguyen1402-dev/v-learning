import { api } from "@shared/api";

import type { Course } from "../types";

export const getCourseInfo = (maKhoaHoc: string) =>
  api
    .get<Course>(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    .then((response) => response.data);
