export const ENTITIES = {
  USER: "user",
  COURSE: "course",
  PASSWORD: "password",
} as const;

export const ENTITY_LABELS = {
  [ENTITIES.USER]: "người dùng",
  [ENTITIES.COURSE]: "khóa học",
  [ENTITIES.PASSWORD]: "mật khẩu",
} as const;

export type EntityType = (typeof ENTITIES)[keyof typeof ENTITIES];
