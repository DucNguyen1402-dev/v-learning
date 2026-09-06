export const COURSES_PLAYER_BUILDER_KEY =
  "CLIENT_PERSONAL_COURSE_DETAIL_PLAYER";

export const COURSES_PLAYER_BUILDER_SEGMENT = "player";

export const COURSES_PLAYER_BUILDER_TITLE = "Trình phát khóa học cá nhân";

export const COURSES_PLAYER_PATH_BUILDER = (maKhoaHoc: string) =>
  `/client/personal-courses/${maKhoaHoc}/${COURSES_PLAYER_BUILDER_SEGMENT}`;
