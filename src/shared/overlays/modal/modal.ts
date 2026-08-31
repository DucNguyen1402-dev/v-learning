import { ModalProvider, useModalContext } from "./contexts";
import {
  createAddModal,
  createCancelCourseEnrollmentModal,
  createCancelUserEnrollmentModal,
  createChangePasswordModal,
  createConfirmUserEnrollmentModal,
  createDeleteModal,
  createLeavePageModal,
  createUnsavedChangesModal,
  createUnsavedPasswordChangesModal,
  createUpdateModal,
} from "./helpers";
import { ModalRenderer } from "./render";

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
    cancelCourseEnrollment: createCancelCourseEnrollmentModal,
    cancelUserEnrollment: createCancelUserEnrollmentModal,
    confirmUserEnrollment: createConfirmUserEnrollmentModal,
  },
  Provider: ModalProvider,
  Component: ModalRenderer,
};
