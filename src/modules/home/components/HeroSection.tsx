import { Navigation } from "@shared/navigation";
export const HeroSection = () => {
  return (
    <section className="flex flex-col gap-14 px-2 pt-24 pb-20 text-left lg:px-6">
      <div className="flex max-w-3xl flex-col items-start gap-6 md:max-w-4/5">
        <span className="rounded-pill border border-border-default px-3 py-1 text-xs font-semibold tracking-wider text-text-subtle uppercase">
          Khóa học trực tuyến thực chiến
        </span>
        <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-[42px] lg:text-[56px]">
          Học online hiệu quả — Không lo hổng kiến thức
        </h1>
        <p className="max-w-2xl leading-relaxed text-text-subtle lg:text-lg">
          Hiểu sâu bản chất, tự tay dựng app thực tế qua khóa học trực tuyến
          linh hoạt. Lộ trình bài bản giúp bạn tự tin bứt phá sự nghiệp ngay tại
          nhà.
        </p>
      </div>
      <div className="self-start">
        <Navigation.components.Go
          routeKey={Navigation.client.keys.COURSES}
          className="button-base button-primary solid px-6 py-3 text-sm"
        >
          Khám phá khóa học
        </Navigation.components.Go>
      </div>
    </section>
  );
};
