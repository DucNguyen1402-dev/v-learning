import { Select } from "@shared/fields";

import { PAGE_SIZE_OPTIONS } from "../config";

type PaginationSelectProps = {
  id?: string;
  value: number | string;
  onChange: (value: number) => void;
  options?: { label: string; value: number | string }[];
};

export const PaginationSelect = ({
  value,
  onChange,
  options = PAGE_SIZE_OPTIONS,
}: PaginationSelectProps) => {
  const onChangeHandler = (value: number | string) => {
    onChange(Number(value));
  };
  return (
    <div className="pagination-select-container">
      <Select.Root>
        <Select.Trigger
          labels={{
            placeholder: "Chọn phân trang",
            disabled: "Disabled",
            required: "Required",
            selected: "Phân trang đã chọn: ",
          }}
        />

        <Select.Content
          value={value}
          onChange={onChangeHandler}
          options={options}
        />
      </Select.Root>
    </div>
  );
};
