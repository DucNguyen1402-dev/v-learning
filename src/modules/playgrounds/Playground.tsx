import { Select } from "@shared/fields";

export const Playground = () => {
  return (
    <div className="flex-center min-h-screen w-full border-2 border-red-500">
      <Select.Root>
        <Select.Trigger
          id="select"
          labels={{
            placeholder: "Select an option",
            disabled: "Disabled",
            required: "Required",
          }}
          value={null}
        />

        <Select.Content
          options={[
            {
              label: "Group 1",
              options: [
                { label: "100", value: 100 },
                { label: "200", value: 200 },
              ],
            },
            {
              label: "Group 2",
              options: [
                { label: "300", value: 300 },
                { label: "400", value: 400 },
              ],
            },
          ]}
        />
      </Select.Root>
    </div>
  );
};
