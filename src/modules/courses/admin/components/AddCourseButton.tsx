import { Navigation } from "@shared/navigation";

export const AddCourseButton = () => {
  return (
    <Navigation.components.Forward
      routeKey={Navigation.admin.keys.COURSES_ADD}
      className="button-base button-primary solid px-4 py-2"
    >
      Thêm khóa học mới
    </Navigation.components.Forward>
  );
};
