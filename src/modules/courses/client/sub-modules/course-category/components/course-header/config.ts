import type { Category } from "@/modules/courses/shared/types";
export const COURSE_CATEGORY_META: Record<
  Category,
  { title: string; description: string }
> = {
  FrontEnd: {
    title: "Khóa học Front End",
    description:
      "Khám phá các khóa học Front End từ cơ bản đến nâng cao, nơi bạn sẽ học cách xây dựng giao diện web hiện đại, responsive và thân thiện với người dùng. Thành thạo HTML, CSS, JavaScript, React cùng các công cụ phát triển phổ biến thông qua các bài học thực tiễn và dự án mô phỏng môi trường làm việc thực tế.",
  },

  BackEnd: {
    title: "Khóa học Back End",
    description:
      "Khám phá các khóa học Back End từ cơ bản đến nâng cao, nơi bạn sẽ học cách xây dựng hệ thống máy chủ mạnh mẽ, bảo mật và có khả năng mở rộng. Nắm vững Node.js, API, cơ sở dữ liệu cùng các kiến thức nền tảng về kiến trúc hệ thống thông qua các bài học thực tiễn và dự án mô phỏng môi trường làm việc thực tế.",
  },

  FullStack: {
    title: "Khóa học Full Stack",
    description:
      "Khám phá các khóa học Full Stack từ cơ bản đến nâng cao, nơi bạn sẽ học cách xây dựng ứng dụng web hoàn chỉnh từ giao diện đến hệ thống phía máy chủ. Thành thạo HTML, CSS, JavaScript, React, Node.js, API và cơ sở dữ liệu thông qua các bài học thực tiễn và dự án mô phỏng quy trình phát triển sản phẩm thực tế.",
  },

  DiDong: {
    title: "Khóa học Mobile",
    description:
      "Khám phá các khóa học Mobile từ cơ bản đến nâng cao, nơi bạn sẽ học cách xây dựng những ứng dụng di động hiện đại, mượt mà và thân thiện với người dùng. Nắm vững các nền tảng, công nghệ phát triển ứng dụng cùng những nguyên tắc thiết kế giao diện mobile thông qua các bài học thực tiễn và dự án mô phỏng môi trường làm việc thực tế.",
  },
  TuDuy: {
    title: "Khóa học Tư Duy",
    description:
      "Khám phá các khóa học Tư duy lập trình từ cơ bản đến nâng cao, nơi bạn sẽ rèn luyện tư duy logic, khả năng phân tích và kỹ năng giải quyết vấn đề một cách có hệ thống. Làm quen với các thuật toán, cấu trúc dữ liệu và phương pháp tư duy hiệu quả thông qua các bài học thực tiễn và bài tập mô phỏng những vấn đề trong lập trình thực tế.",
  },
  Design: {
    title: "Khóa học Thiết Kế",
    description:
      "Khám phá các khóa học Thiết Kế từ cơ bản đến nâng cao, nơi bạn sẽ học cách tạo ra các sản phẩm thiết kế sáng tạo và thẩm mỹ. Nắm vững các nguyên tắc thiết kế, công cụ thiết kế phổ biến và quy trình sáng tạo thông qua các bài học thực tiễn và dự án mô phỏng môi trường làm việc thực tế.",
  },
};
