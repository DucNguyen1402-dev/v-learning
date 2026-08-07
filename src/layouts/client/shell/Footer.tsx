const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-xs text-neutral-500 md:flex-row">
        <div>
          &copy; {new Date().getFullYear()} V-learning. Mọi quyền được bảo lưu.
        </div>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-neutral-400">
            Điều khoản
          </a>
          <a href="#" className="transition-colors hover:text-neutral-400">
            Bảo mật
          </a>
          <a href="#" className="transition-colors hover:text-neutral-400">
            Liên hệ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
