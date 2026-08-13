import { FIELD_LAYOUT, useFieldContext } from "@shared/fields";

type LabelProps = {
  target: string;
  required?: boolean;
  text: string;
};

export const Label = ({ target, required = false, text }: LabelProps) => {
  const { layout } = useFieldContext();

  return (
    <div
      className={
        layout === FIELD_LAYOUT.VERTICAL ? "label-vertical-spacing" : ""
      }
    >
      <label htmlFor={target} className="label">
        {text}
        {required && <span className="label-required ml-1.5">*</span>}
      </label>
    </div>
  );
};
