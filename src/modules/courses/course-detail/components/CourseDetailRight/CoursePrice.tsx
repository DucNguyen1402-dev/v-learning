interface CoursePriceProps {
  originalPrice: number;
  discountedPrice: number;
}

export const CoursePrice = ({
  originalPrice,
  discountedPrice,
}: CoursePriceProps) => {
  const formattedOriginalPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(originalPrice);

  const formattedDiscountedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(discountedPrice);
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-2xl font-extrabold tracking-tight lg:text-3xl">
        {formattedDiscountedPrice}
      </span>
      <span className="text-xs font-medium text-text-muted line-through lg:text-sm">
        {formattedOriginalPrice}
      </span>
    </div>
  );
};
