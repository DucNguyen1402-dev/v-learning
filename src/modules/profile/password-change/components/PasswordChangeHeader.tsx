const PasswordChangeHeader = () => {
  return (
    <div className="flex-center flex-col text-center">
      <h2 className="text-[26px] font-semibold ">Đổi mật khẩu</h2>
      <p className="text-[13px] leading-relaxed text-text-subtle">
        Mật khẩu mới nên có ít nhất 8 ký tự bao gồm chữ cái, chữ số và ký tự đặc
        biệt để đảm bảo an toàn.
      </p>
    </div>
  );
};

export default PasswordChangeHeader;
