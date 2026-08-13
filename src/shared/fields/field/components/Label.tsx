import { FIELD_LAYOUT, useFieldContext } from "@shared/fields";

type LabelProps = {
  for: string;
  required?: boolean;
  label: string;
};

export const Label = ({
  for: htmlFor,
  required = false,
  label,
}: LabelProps) => {
  const { layout } = useFieldContext();

  return (
    <div
      className={
        layout === FIELD_LAYOUT.VERTICAL ? "label-vertical-spacing" : ""
      }
    >
      <label htmlFor={htmlFor} className="label">
        {label}
        {required && <span className="label-required ml-1.5">*</span>}
      </label>
    </div>
  );
};
