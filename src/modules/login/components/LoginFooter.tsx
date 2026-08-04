import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <p className="flex-center gap-1.5 text-sm">
      <span className="text-stone-600 dark:text-stone-500">
        Chưa có tài khoản?
      </span>
      <Link to="/client/register" className="font-medium hover:underline">
        Đăng ký ngay
      </Link>
    </p>
  );
};

export default LoginFooter;
