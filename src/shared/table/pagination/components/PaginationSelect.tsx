import { Select } from "@shared/fields";

import { pageSizeOptions } from "../config";

type PaginationSelectProps = {
  id?: string;
  value: number | string;
  hideEntity?: boolean;
  onChange: (value: number) => void;
  options?: { label: string; value: number | string }[];
};

export const PaginationSelect = ({
  value,
  hideEntity,
  onChange,
}: PaginationSelectProps) => {
  const onChangeHandler = (value: number | string) => {
    onChange(Number(value));
  };

  const isDesktop = window.innerWidth >= 1024;
  const options = isDesktop ? pageSizeOptions.desktop : pageSizeOptions.compact;
  return (
    <div className="pagination-select-container">
      <Select.Root>
        <Select.Trigger entity={hideEntity ? undefined : "trang"} />

        <Select.Content
          value={value}
          onChange={onChangeHandler}
          options={options}
        />
      </Select.Root>
    </div>
  );
};
