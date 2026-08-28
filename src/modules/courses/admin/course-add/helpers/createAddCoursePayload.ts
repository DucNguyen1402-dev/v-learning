import { format } from "date-fns";

import type { AddCourseFormData, AddCoursePayload } from "../types";
import { generateCourseAlias, generateCourseId } from "../utils";
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
    hinhAnh:
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/344752/apple-watch-series-11-gps-cellular-42mm-vien-nhom-day-the-thao-den-2-638931875900244422-750x500.jpg",
    maNhom: "GP01",
    ngayTao: format(new Date(), "dd/MM/yyyy"),
    maDanhMucKhoaHoc: data.maDanhMucKhoaHoc,
    taiKhoanNguoiTao: "bonnamsau",
  };
};
