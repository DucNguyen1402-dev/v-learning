import { cn } from "@shared/utils";

export const Spinner = () => {
  return (
    <div className={cn("spinner-container")}>
      <div className="spinner-outer" />
      <div className="spinner-inner" />
    </div>
  );
};
