import { TableEmptyState } from "@shared/table";

export const Playground = () => {
  return (
    <div className="flex-center min-h-screen w-full border-2 border-red-500">
      <table className="w-full border-2 border-blue-500">
        <thead>
          <tr>
            <th className="border-2 border-green-500">Header 1</th>
            <th className="border-2 border-green-500">Header 2</th>
            <th className="border-2 border-green-500">Header 3</th>
            <th className="border-2 border-green-500">Header 4</th>
          </tr>
        </thead>
        <tbody>
          <TableEmptyState
            colSpan={4}
            title="No Data"
            description="There is no data available at the moment."
          />
        </tbody>
      </table>
    </div>
  );
};
