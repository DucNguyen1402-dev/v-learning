import { MODAL_TYPES } from "../constants";
import {
  AddModal,
  DeleteModal,
  LeavePageModal,
  PasswordChangeModal,
  UnsavedChangesModal,
  UpdateModal,
} from "../modals";

export const MODAL_TYPE_CONFIG = {
  [MODAL_TYPES.ADD]: {
    ModalComponent: AddModal,
    loading: false,
  },
  [MODAL_TYPES.DELETE]: {
    ModalComponent: DeleteModal,
    loading: true,
  },
  [MODAL_TYPES.UPDATE]: {
    ModalComponent: UpdateModal,
    loading: false,
  },
  [MODAL_TYPES.UNSAVED_CHANGES]: {
    ModalComponent: UnsavedChangesModal,
    loading: false,
  },
  [MODAL_TYPES.LEAVE_PAGE]: {
    ModalComponent: LeavePageModal,
    loading: false,
  },
  [MODAL_TYPES.CHANGE_PASSWORD]: {
    ModalComponent: PasswordChangeModal,
    loading: false,
  },
} as const;
