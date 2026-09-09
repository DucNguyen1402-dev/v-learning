import { MODAL_TYPES } from "../constants";
export const createConfirmUserEnrollmentModal = (tenNguoiDung: string) => {
  return {
    type: MODAL_TYPES.ADD,
    title: `Xác nhận ghi danh`,
    subtitle: `Bạn có chắc chắn muốn ghi danh người dùng "${tenNguoiDung}" vào khóa học không?`,
  };
};
