import { CoursePaymentLeft, CoursePaymentRight } from "../components";
export const CoursePaymentPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 font-sans text-slate-800 antialiased">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">
          Thanh toán khóa học
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <CoursePaymentLeft />
          </div>
          <div className="md:col-span-5">
            <CoursePaymentRight />
          </div>
        </div>
      </div>
    </div>
  );
};
