export type EnrollmentStatus = "đã ghi danh" | "chờ xác nhận";

export type UserCourse = {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  trangThai: EnrollmentStatus;
};
