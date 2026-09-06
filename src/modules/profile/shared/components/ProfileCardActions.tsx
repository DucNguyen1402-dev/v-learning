import { Navigation } from "@shared/navigation";

export const ProfileCardActions = ({ isPending }: { isPending: boolean }) => {
  const currentArea = Navigation.hooks.useCurrentArea();

  return (
    <div className="flex flex-col items-center gap-4">
      <Navigation.components.Forward
        routeKey={Navigation[currentArea].keys.PROFILE_CHANGE}
        className={`button-base button-primary solid w-full py-1.5 ${isPending ? "pointer-events-none opacity-50" : ""}`}
      >
        Chỉnh sửa hồ sơ
      </Navigation.components.Forward>

      <Navigation.components.Forward
        routeKey={Navigation[currentArea].keys.PASSWORD_CHANGE}
        className={`button-base button-secondary ghost px-4 py-1.5 ${isPending ? "pointer-events-none opacity-50" : ""}`}
      >
        Đổi mật khẩu
      </Navigation.components.Forward>
    </div>
  );
};
