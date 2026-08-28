import { api } from "./index";

export const updateCourse = async (data) => {
  return api.post("/QuanLyKhoaHoc/CapNhatKhoaHoc", data);
};
