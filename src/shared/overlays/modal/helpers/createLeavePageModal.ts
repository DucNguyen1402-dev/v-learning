import { MODAL_TYPES } from ".";

export const createLeavePageModal = () => {
  return {
    type: MODAL_TYPES.LEAVE_PAGE,
    title: "Rời khỏi trang?",
    subtitle: "Các thay đổi chưa được lưu sẽ bị mất.",
  };
};
