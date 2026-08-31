export type EnrollmentState = "enrolled" | "pending";

export type UserCourse = {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  trangThai: EnrollmentState;
};
