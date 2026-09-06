import { Users } from "lucide-react";

export const RemainingSeats = ({
  remainingSeats,
  totalSeats,
}: {
  remainingSeats: number;
  totalSeats: number;
}) => {
  const seatsPercent = Math.round(
    ((totalSeats - remainingSeats) / totalSeats) * 100,
  );
  return (
    <div className="flex flex-col gap-3 select-none">
      <div className="flex justify-between text-xs font-medium">
        <span className="flex items-center gap-1 text-text-subtle">
          <Users className="h-3.5 w-3.5 text-text-muted" />
          Chỗ trống còn lại:
        </span>
        <span className="font-bold text-text-promotion-urgent">
          {remainingSeats} suất
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-pill bg-bg-subtle">
        <div
          className="h-full rounded-pill bg-bg-promotion-urgent"
          style={{ width: `${seatsPercent}%` }}
        />
      </div>
    </div>
  );
};
