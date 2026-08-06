import { ModalProvider, useModalContext } from "./contexts";
import {
  createAddModal,
  createChangePasswordModal,
  createDeleteModal,
  createEditModal,
  createLeavePageModal,
  createUnsavedChangesModal,
  createUnsavedPasswordChangesModal,
} from "./helpers";

export const Modal = {
  use: useModalContext,

  config: {
    add: createAddModal,
    delete: createDeleteModal,
    edit: createEditModal,
    leavePage: createLeavePageModal,
    passwordChange: createChangePasswordModal,
    unsavedPasswordChange: createUnsavedPasswordChangesModal,
    unsavedChanges: createUnsavedChangesModal,
  },
  Provider: ModalProvider,
};
export default Modal;
