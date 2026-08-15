import { Pagination } from "@shared/table";

import { statusStyles } from "./data";
import type { TableRow } from "./types";
export const Playground = () => {
  const {
    state: { paginatedList },
  } = Pagination.use<TableRow>();
  return (
    <div className="w-full overflow-x-auto rounded-lg border py-8 shadow-sm">
      <div>
        <Pagination.Control />
      </div>
      <table className="mt-6 w-full text-left text-sm">
        <thead className="tracking-wideruppercase border-b bg-zinc-50 text-xs">
          <tr>
            <th scope="col" className="px-4 py-3 font-medium">
              ID
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Name
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Role
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Status
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Created At
            </th>
            <th scope="col" className="px-4 py-3 text-right font-medium">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {paginatedList.map((row) => (
            <tr key={row.id} className="transition-colors">
              <td className="t px-4 py-3 font-mono text-xs font-semibold whitespace-nowrap">
                {row.id}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="font-medium">{row.name}</div>
                <div className="text-xs text-zinc-500">{row.email}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-zinc-700">
                {row.role}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[row.status]}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-zinc-500">
                {row.createdAt}
              </td>
              <td className="px-4 py-3 text-right font-mono whitespace-nowrap">
                {row.amount.toLocaleString("vi-VN")} đ
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
