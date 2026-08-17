import { Navigation } from "@shared/navigation";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";

export const ProfileCardActions = () => {
  const { forward } = Navigation.hooks.useNavigate();

  const onProfileChangeClick = () => forward(Navigation.client.keys.PROFILE);
  const onPasswordChangeClick = () => forward(Navigation.client.keys.COURSES);
  return (
    <div className="flex flex-col gap-4">
      <Button
        appearance={BUTTON_APPEARANCES.SOLID}
        intent={BUTTON_INTENTS.PRIMARY}
        onClick={onProfileChangeClick}
      >
        Chỉnh sửa hồ sơ
      </Button>

      <Button
        appearance={BUTTON_APPEARANCES.GHOST}
        intent={BUTTON_INTENTS.DESTRUCTIVE}
        size={BUTTON_SIZES.SMALL}
        onClick={onPasswordChangeClick}
      >
        Đổi mật khẩu
      </Button>
    </div>
  );
};
