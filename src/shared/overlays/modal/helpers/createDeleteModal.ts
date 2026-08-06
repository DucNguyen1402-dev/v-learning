import type { Entity } from "@shared/domain";

import { ENTITY_LABELS, MODAL_TYPES } from "./index";

export const createDeleteModal = (entity: Entity, name?: string) => {
  const entityLabel = ENTITY_LABELS[entity];
  const target = name ? `${entityLabel} "${name}"` : entityLabel;

  return {
    type: MODAL_TYPES.DELETE,
    title: `Bạn có chắc muốn xóa ${target}?`,
    subtitle: `Thông tin ${entityLabel} sẽ bị xóa khỏi hệ thống.`,
  };
};
