import { Navigation } from "@shared/navigation";

export const AddUserButton = () => {
  return (
    <Navigation.components.Forward
      routeKey={Navigation.admin.keys.ADD_USER}
      className="button-base button-primary solid px-4 py-2 text-sm"
    >
      Thêm người dùng mới
    </Navigation.components.Forward>
  );
};
