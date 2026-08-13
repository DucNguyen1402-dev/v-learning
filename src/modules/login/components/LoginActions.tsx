import { Login } from "@modules/login";
import { Checkbox, CHECKBOX_SIZE, Field, FIELD_LAYOUT } from "@shared/fields";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";

export const LoginActions = () => {
  const {
    hookForm: { control },
    actions: { onLoginClick },
    loading,
  } = Login.use();
  return (
    <div className="flex flex-col gap-8">
      <div className="self-start">
        <Field.Root layout={FIELD_LAYOUT.HORIZONTAL}>
          <Field.Controller name="remember" control={control}>
            {({ field }) => (
              <Checkbox
                id="remember"
                checked={!!field.value}
                onCheckedChange={field.onChange}
                size={CHECKBOX_SIZE.SMALL}
              />
            )}
          </Field.Controller>
          <Field.Label for="remember" label="Ghi nhớ đăng nhập" />
        </Field.Root>
      </div>
      <Button
        onClick={onLoginClick}
        loading={loading}
        appearance={BUTTON_APPEARANCES.SOLID}
        intent={BUTTON_INTENTS.PRIMARY}
      >
        ĐĂNG NHẬP
      </Button>
    </div>
  );
};
