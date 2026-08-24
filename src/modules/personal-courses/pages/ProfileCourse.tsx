import { useEffect } from "react";

import { UserInfor } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";

import { EmptyCourseState } from "../components";
export const ProfileCourse = () => {
  Navigation.hooks.useScrollOnRouteChange();

  //2. Show toast message if there's a payload in the location state
  const { show: showToast } = Toast.use();
  const [toastState] = State.useTemporary(Navigation.hooks.usePayload());
  const consumePayload = Navigation.hooks.useConsumePayload();

  useEffect(() => {
    if (!toastState) return;
    showToast(toastState);
    //3. Consume the location state to prevent showing the toast again on re-render
    consumePayload();
  }, [toastState, showToast, consumePayload]);

  const { infor } = UserInfor.useQuery();
  if (!infor) return;

  const courses = infor.chiTietKhoaHocGhiDanh;

  if (courses.length === 0) return <EmptyCourseState />;
  return (
    <div className="grid min-h-screen gap-6 bg-bg-default">
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
