import {
  SKELETON_HEIGHTS,
  SKELETON_RADIUS,
  SKELETON_WIDTHS,
  TableSkeleton,
} from "@shared/ui";
import { createArray } from "@shared/utils";

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
          {[
            ...createArray(5).map((_, index) => (
              <TableSkeleton
                key={index}
                colSpan={4}
                width={SKELETON_WIDTHS.LG}
                height={SKELETON_HEIGHTS.LG}
                radius={SKELETON_RADIUS.MD}
              />
            )),
          ]}
        </tbody>
      </table>
    </div>
  );
};
