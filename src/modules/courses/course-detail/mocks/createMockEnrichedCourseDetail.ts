import type { MockCourseDetail } from "./types";

const randomBoolean = () => Math.random() > 0.5;

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export const createMockEnrichedCourseDetail = (): MockCourseDetail => {
  const totalSeats = randomNumber(20, 100);
  const remainingSeats = randomNumber(
    1,
    Math.min(5, Math.floor(totalSeats * 0.1)),
  );

  const originalPrice = randomNumber(1_000_000, 5_000_000);
  const discountPercent = randomNumber(20, 40) / 100;
  const discountedPrice = Math.round(originalPrice * (1 - discountPercent));

  const hasPromotion = randomBoolean();
  const deadlineHours = hasPromotion ? randomNumber(1, 72) : 0;

  return {
    price: {
      originalPrice,
      discountedPrice,
    },
    hasPromotion,
    seat: {
      totalSeats,
      remainingSeats,
    },
    deadlineHours,
  };
};
