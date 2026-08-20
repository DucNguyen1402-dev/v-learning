import { Select } from "@shared/fields";

import { PAGE_SIZE_OPTIONS } from "../config";

type PaginationSelectProps = {
  id?: string;
  value: number | string;
  onChange: (value: number) => void;
  options?: { label: string; value: number | string }[];
  shouldHideIcon?: boolean;
};

export const PaginationSelect = ({
  value,
  onChange,
  options = PAGE_SIZE_OPTIONS,
  shouldHideIcon = false,
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
            selected: "Số mục mỗi trang :",
          }}
          shouldHideIcon={shouldHideIcon}
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
