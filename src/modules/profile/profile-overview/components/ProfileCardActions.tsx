import { Navigation } from "@shared/navigation";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";

export const ProfileCardActions = ({ isPending }: { isPending: boolean }) => {
  const { forward } = Navigation.hooks.useNavigate();

  const onProfileChangeClick = () =>
    forward(Navigation.client.keys.PROFILE_CHANGE);
  const onPasswordChangeClick = () =>
    forward(Navigation.client.keys.PROFILE_PASSWORD_CHANGE);
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        appearance={BUTTON_APPEARANCES.SOLID}
        intent={BUTTON_INTENTS.PRIMARY}
        onClick={onProfileChangeClick}
        disabled={isPending}
        fullWidth
      >
        Chỉnh sửa hồ sơ
      </Button>

      <Button
        appearance={BUTTON_APPEARANCES.GHOST}
        intent={BUTTON_INTENTS.SECONDARY}
        size={BUTTON_SIZES.SMALL}
        onClick={onPasswordChangeClick}
        disabled={isPending}
      >
        Đổi mật khẩu
      </Button>
    </div>
  );
};
