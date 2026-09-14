import { Skeleton, SKELETON_HEIGHTS, SKELETON_RADIUS } from "@shared/ui";
import { createArray } from "@shared/utils";

const ROW_COUNT = 10;

export const CourseTableSkeleton = () => {
  return createArray(ROW_COUNT).map((_, index) => (
    <tr key={index} className="border-t border-border-muted">
      <td className="py-5 pl-8">
        <Skeleton
          size={{ width: "3.5rem" }}
          height={SKELETON_HEIGHTS.SM}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td className="pl-8">
        <Skeleton
          size={{ width: "10rem" }}
          height={SKELETON_HEIGHTS.SM}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td className="pl-8">
        <Skeleton
          size={{ width: "8rem" }}
          height={SKELETON_HEIGHTS.SM}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td className="pl-8">
        <Skeleton
          size={{ width: "5.5rem" }}
          height={SKELETON_HEIGHTS.SM}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td className="pl-8">
        <Skeleton
          size={{ width: "5rem" }}
          height={SKELETON_HEIGHTS.SM}
          radius={SKELETON_RADIUS.SM}
        />
      </td>
      <td>
        <div className="flex-center">
          <Skeleton
            size={{ width: "1.75rem" }}
            height={SKELETON_HEIGHTS.SM}
            radius={SKELETON_RADIUS.SM}
          />
        </div>
      </td>
      <td>
        <div className="flex-center">
          <Skeleton
            size={{ width: "2.25rem" }}
            height={SKELETON_HEIGHTS.SM}
            radius={SKELETON_RADIUS.SM}
          />
        </div>
      </td>
      <td>
        <div className="flex-center gap-1">
          {createArray(4).map((_, iconIndex) => (
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
