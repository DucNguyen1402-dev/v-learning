export const MODAL_TYPES = {
  ADD: "add",
  EDIT: "edit",
  DELETE: "delete",
  UNSAVED_CHANGES: "unsavedChanges",
  LEAVE_PAGE: "leavePage",
  CHANGE_PASSWORD: "changePassword",
} as const;

export type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];
