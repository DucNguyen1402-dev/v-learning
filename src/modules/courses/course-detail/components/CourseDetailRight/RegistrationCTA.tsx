import { Navigation } from "@shared/navigation";
import { ArrowRight } from "lucide-react";

export const RegistrationCTA = ({ maKhoaHoc }: { maKhoaHoc: string }) => {
  return (
    <Navigation.components.Forward
      routeKey={Navigation.client.keys.COURSES}
      param={maKhoaHoc}
      action="payment"
      className="group button-base button-primary solid w-full py-3"
    >
      <div className="flex items-center gap-2">
        <span>Đăng ký tham gia ngay</span>
        <ArrowRight className="group h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
      </div>
    </Navigation.components.Forward>
  );
};
