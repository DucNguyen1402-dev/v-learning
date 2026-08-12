type LabelProps = {
  htmlFor: string;
  required?: boolean;
  label: string;
};

export const Label = ({ htmlFor, required = false, label }: LabelProps) => {
  return (
    <div className="label-spacing">
      <label htmlFor={htmlFor} className="label">
        {label}
        {required && <span className="label-required ml-1.5">*</span>}
      </label>
    </div>
  );
};
