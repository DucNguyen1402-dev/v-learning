import { Login } from "@modules/login";
import { CheckboxField } from "@shared/fields";
import { Button } from "@shared/ui";

export const LoginActions = () => {
  const {
    hookForm: { control },
    actions: { onLoginClick },
    loading,
  } = Login.use();
  return (
    <div className="flex flex-col gap-8">
      <div className="self-start">
        <CheckboxField
          id="remember"
          name="remember"
          label="Ghi nhớ đăng nhập"
          control={control}
          size="sm"
        />
      </div>
      <Button type="button" onClick={onLoginClick} loading={loading}>
        ĐĂNG NHẬP
      </Button>
    </div>
  );
};
