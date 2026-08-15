export const ENTITIES = {
  USER: "user",
  COURSE: "course",
} as const;

export const ENTITY_LABELS = {
  [ENTITIES.USER]: "người dùng",
  [ENTITIES.COURSE]: "khóa học",
} as const;

export type EntityType = (typeof ENTITIES)[keyof typeof ENTITIES];
