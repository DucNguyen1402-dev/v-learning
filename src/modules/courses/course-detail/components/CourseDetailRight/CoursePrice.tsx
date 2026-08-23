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
      <span className="text-3xl font-extrabold tracking-tight">
        {formattedDiscountedPrice}
      </span>
      <span className="text-sm font-medium text-text-muted line-through">
        {formattedOriginalPrice}
      </span>
    </div>
  );
};
