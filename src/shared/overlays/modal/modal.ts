import { ModalProvider, useModalContext } from "./contexts";
import {
  createAddModal,
  createChangePasswordModal,
  createDeleteModal,
  createLeavePageModal,
  createUnsavedChangesModal,
  createUnsavedPasswordChangesModal,
  createUpdateModal,
} from "./helpers";

export const Modal = {
  use: useModalContext,

  config: {
    add: createAddModal,
    delete: createDeleteModal,
    update: createUpdateModal,
    leavePage: createLeavePageModal,
    passwordChange: createChangePasswordModal,
    unsavedPasswordChange: createUnsavedPasswordChangesModal,
    unsavedChanges: createUnsavedChangesModal,
  },
  Provider: ModalProvider,
};
