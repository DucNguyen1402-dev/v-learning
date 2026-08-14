export const ENTITIES = {
  USER: "user",
  COURSE: "course",
};

export const ENTITY_LABELS = {
  [ENTITIES.USER]: "người dùng",
  [ENTITIES.COURSE]: "khóa học",
};

export type Entity = (typeof ENTITIES)[keyof typeof ENTITIES];
