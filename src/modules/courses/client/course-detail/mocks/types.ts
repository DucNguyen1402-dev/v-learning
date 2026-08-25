export type MockCourseDetail = {
  price: {
    originalPrice: number;
    discountedPrice: number;
  };
  seat: {
    totalSeats: number;
    remainingSeats: number;
  };
  deadlineHours: number;
  hasPromotion: boolean;
};
