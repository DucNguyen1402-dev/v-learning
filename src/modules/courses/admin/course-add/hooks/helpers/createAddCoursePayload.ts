import { format } from "date-fns";

import type { AddCourseFormData, AddCoursePayload } from "../../types";
import { generateCourseAlias, generateCourseId } from "./utils";
export const createAddCoursePayload = (
  data: AddCourseFormData,
): AddCoursePayload => {
  return {
    maKhoaHoc: generateCourseId(),
    biDanh: generateCourseAlias(data.tenKhoaHoc),
    tenKhoaHoc: data.tenKhoaHoc,
    moTa: data.moTa,
    luotXem: 0,
    danhGia: 0,
    hinhAnh: data.hinhAnh[0].name,
    maNhom: "GP01",
    ngayTao: format(new Date(), "dd/MM/yyyy"),
    maDanhMucKhoaHoc: data.maDanhMucKhoaHoc,
    taiKhoanNguoiTao: "",
  };
};
