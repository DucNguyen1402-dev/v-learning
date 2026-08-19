import { UserInfor } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  EmptyState,
} from "@shared/ui";
import { Frown } from "lucide-react";

export const ProfileCourse = () => {
  const { infor } = UserInfor.useQuery();

  const { go } = Navigation.hooks.useNavigate();

  if (!infor) return;

  if (infor.chiTietKhoaHocGhiDanh.length === 0) {
    return (
      <div className="flex-center w-full rounded-container border border-border-subtle">
        <EmptyState
          title="Bạn chưa ghi danh khóa học nào."
          action={
            <Button
              appearance={BUTTON_APPEARANCES.SOLID}
              intent={BUTTON_INTENTS.SECONDARY}
              onClick={() =>
                go(Navigation.client.keys.COURSES, {
                  intent: "explore",
                })
              }
            >
              Khám phá khóa học
            </Button>
          }
          icon={Frown}
        />
      </div>
    );
  }

  const courses = infor.chiTietKhoaHocGhiDanh;

  return (
    <div className="grid gap-6">
      {courses.map((course) => (
        <article key={course.maKhoaHoc} className="rounded-lg border p-4">
          <img
            src={course.hinhAnh}
            alt={course.tenKhoaHoc}
            className="mb-4 h-48 w-full rounded object-cover"
          />

          <h3 className="text-lg font-semibold">{course.tenKhoaHoc}</h3>

          <p className="mt-2 text-sm text-gray-600">{course.moTa}</p>

          <div className="mt-4 space-y-1 text-sm">
            <p>
              <strong>Mã khóa học:</strong> {course.maKhoaHoc}
            </p>

            <p>
              <strong>Bí danh:</strong> {course.biDanh}
            </p>

            <p>
              <strong>Lượt xem:</strong> {course.luotXem}
            </p>

            <p>
              <strong>Đánh giá:</strong> {course.danhGia}/5
            </p>

            <p>
              <strong>Ngày tạo:</strong>{" "}
              {new Date(course.ngayTao).toLocaleDateString("vi-VN")}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};
