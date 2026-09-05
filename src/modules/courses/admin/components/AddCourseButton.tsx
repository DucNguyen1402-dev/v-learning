import { Navigation } from "@shared/navigation";

export const AddCourseButton = () => {
  return (
    <Navigation.components.Forward
      routeKey={Navigation.admin.keys.ADD_COURSE}
      className="button-base button-primary solid px-4 py-2 text-sm"
    >
      Thêm khóa học mới
    </Navigation.components.Forward>
  );
};
