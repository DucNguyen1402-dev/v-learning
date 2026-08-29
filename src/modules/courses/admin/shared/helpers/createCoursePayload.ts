import type { Course } from "@modules/courses/shared/types";
import { format } from "date-fns";

import type { CourseFormData, CoursePayload } from "../types";
import { generateCourseAlias, generateCourseId } from "../utils";
type CreateCoursePayloadProps = {
  data: CourseFormData;
  courseSourse?: Course;
};
export const createCoursePayload = ({
  data,
  courseSourse,
}: CreateCoursePayloadProps): CoursePayload => {
  return {
    maKhoaHoc: courseSourse?.maKhoaHoc ?? generateCourseId(),
    biDanh: courseSourse?.biDanh ?? generateCourseAlias(data.tenKhoaHoc),
    tenKhoaHoc: data.tenKhoaHoc,
    moTa: data.moTa,
    luotXem: courseSourse?.luotXem ?? 0,
    danhGia: courseSourse?.danhGia ?? 0,
    hinhAnh: data.hinhAnh[0]?.name ?? "",
    maNhom: "GP01",
    ngayTao: courseSourse?.ngayTao ?? format(new Date(), "dd/MM/yyyy"),
    maDanhMucKhoaHoc: data.maDanhMucKhoaHoc,
    taiKhoanNguoiTao: "",
  };
};
