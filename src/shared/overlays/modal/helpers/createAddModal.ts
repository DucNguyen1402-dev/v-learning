import { ENTITY_LABELS, type EntityType } from "@shared/domain";

import { MODAL_TYPES } from "../constants";

export const createAddModal = (entity: EntityType) => {
  const entityLabel = ENTITY_LABELS[entity];

  return {
    type: MODAL_TYPES.ADD,
    title: `Xác nhận tạo ${entityLabel} mới.`,
    subtitle: `Hệ thống sẽ tạo ${entityLabel} mới với thông tin bạn đã nhập`,
  };
};
