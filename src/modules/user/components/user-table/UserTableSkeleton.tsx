import { Skeleton, SKELETON_HEIGHTS, SKELETON_RADIUS } from "@shared/ui";
import { createArray } from "@shared/utils";

const ROW_COUNT = 10;

export const UserTableSkeleton = () => {
  return createArray(ROW_COUNT).map((_, index) => (
    <tr key={index} className="border-t border-border-muted">
      <td className="py-5 pl-8">
        <Skeleton
          size={{ width: "3.5rem" }}
          height={SKELETON_HEIGHTS.MD}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td>
        <Skeleton
          size={{ width: "10rem" }}
          height={SKELETON_HEIGHTS.MD}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td>
        <Skeleton
          size={{ width: "12rem" }}
          height={SKELETON_HEIGHTS.MD}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td>
        <Skeleton
          size={{ width: "8rem" }}
          height={SKELETON_HEIGHTS.MD}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td>
        <div className="flex-center w-full pl-4">
          <Skeleton
            size={{ width: "7rem" }}
            height={SKELETON_HEIGHTS.MD}
            radius={SKELETON_RADIUS.FULL}
          />
        </div>
      </td>

      <td>
        <div className="flex-center gap-2">
          {createArray(3).map((_, iconIndex) => (
            <Skeleton
              key={iconIndex}
              size={{ width: "1.75rem", height: "1.75rem" }}
              radius={SKELETON_RADIUS.FULL}
            />
          ))}
        </div>
      </td>
    </tr>
  ));
};
