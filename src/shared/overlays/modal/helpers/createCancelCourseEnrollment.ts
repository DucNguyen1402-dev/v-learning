import { MODAL_TYPES } from ".";

export const createCancelCourseEnrollmentModal = (tenKhoaHoc: string) => {
  return {
    type: MODAL_TYPES.DELETE,
    title: `Xác nhận hủy ghi danh`,
    subtitle: `Khóa học "${tenKhoaHoc}" sẽ được hủy ghi danh và xóa khỏi danh sách khóa học của bạn.`,
  };
};

export const createCancelUserEnrollmentModal = (tenNguoiDung: string) => {
  return {
    type: MODAL_TYPES.DELETE,
    title: `Xác nhận hủy ghi danh`,
    subtitle: `Người dùng "${tenNguoiDung}" sẽ bị hủy ghi danh khỏi khóa học.`,
  };
};
